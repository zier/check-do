import { handleActions } from 'redux-actions';
import { includes } from 'lodash'
import { addTask, removeTask, toggleDoneTask, filterTags } from '../actions/task'

const defaultState = {
  items: [],
  displayItems: []
}

const _filterDisplayTag = (allTasks, filterTags) => {
  let newDisplayItems = []
  if (filterTags.length === 0) return newDisplayItems
  newDisplayItems = allTasks.filter((task) => {
    const stringTags = task.tags.join('#')

    let match = false
    filterTags.forEach((tag) => {
      if (includes(stringTags,tag)) match = true
    })

    return match
  })

  return newDisplayItems
}

const Task = handleActions({
    [addTask]: (state, { payload: { task } }) => {
      return {
        ...state,
        items: [
          ...state.items,
          task
        ]
      }
    },

    [filterTags]: (state , { payload: { tags } }) => {
      const newDisplayItems = _filterDisplayTag(state.items, tags)

      return {
        ...state.items,
        displayItems: newDisplayItems,
      }
    },

    [removeTask]: (state, { payload: { taskId } }) => {
      return {
        ...state,
        items: state.items.filter((task) => task.id !== taskId)
      }
    },

    [toggleDoneTask]: (state, { payload: { taskId } }) => {
      const newItems = state.newItems.map((task) => {
        return (task.id === taskId) ? { ...task, isDone: !task.isDone } : task
      })

      return {
        ...state,
        items: newItems
      }
    },
  },
  defaultState
)

export default Task
