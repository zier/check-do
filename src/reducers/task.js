import { handleActions } from 'redux-actions';
import { addTask, removeTask, toggleDoneTask } from '../actions/task'

const Task = handleActions(
  {
    [addTask]: (state, { payload: { task } }) => {
      return {
        displayItems: [
          ...state.displayItems,
          task
        ]
      }
    },

    [removeTask]: (state, { payload: { taskId } }) => {
      return { displayItems: state.displayItems.filter((task) => task.id !== taskId) }
    },

    [toggleDoneTask]: (state, { payload: { taskId } }) => {
      const newDisplayItems = state.displayItems.map((task) => {
        return (task.id === taskId) ? { ...task, isDone: !task.isDone } : task
      })

      return {
        displayItems: newDisplayItems
       }
    },
  },
  {}
)

export default Task
