import { handleActions } from 'redux-actions';
import { includes } from 'lodash'
import { addTask, removeTask, toggleDoneTask, filterTags } from '../actions/task'

const defaultState = {
  items: [],
  displayItems: []
}

const _filterDisplayTag = (allTasks, filterTags) => {
  let newDisplayItems = []
  if (filterTags.length === 0) return allTasks

  newDisplayItems = allTasks.filter((task) => {
    const stringTags = task.tags.join('#')

    let match = false
    filterTags.forEach((tag) => {
      if (includes(stringTags, tag.replace('#',''))) match = true
    })

    return match
  })

  return newDisplayItems
}

const Task = handleActions({
    [addTask]: (state, { payload: { task } }) => {
      return {
        displayItems: [
          ...state.displayItems,
          task
        ],
        items: [
          ...state.items,
          task
        ]
      }
    },

    [filterTags]: (state , { payload: { tags } }) => {
      const newDisplayItems = _filterDisplayTag(state.items, tags)

      return {
        ...state,
        displayItems: newDisplayItems,
      }
    },

    [removeTask]: (state, { payload: { taskId } }) => {
      return {
        displayItems: state.displayItems.filter((task) => task.id !== taskId),
        items: state.items.filter((task) => task.id !== taskId)
      }
    },

    [toggleDoneTask]: (state, { payload: { taskId } }) => {
      const newItems = state.items.map((task) => {
        return (task.id === taskId) ? { ...task, isDone: !task.isDone } : task
      })

      const newDisplayItems = state.displayItems.map((task) => {
        return (task.id === taskId) ? { ...task, isDone: !task.isDone } : task
      })

      return {
        displayItems: newDisplayItems,
        items: newItems
      }
    },
  },
  defaultState
)


export default Task
