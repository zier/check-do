import { ADD_TASK, REMOVE_TASK, TOGGLE_DONE_TASK } from '../actions/task'

const Task = (state = {}, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        displayItems: [
          ...state.displayItems,
          action.task
        ]
      }
    case TOGGLE_DONE_TASK:
      const newDisplayItems = state.displayItems.map((task) => {
        return (task.id === action.taskId) ? { ...task, isDone: !task.isDone } : task
      })

      return {
        displayItems: newDisplayItems
      }
    case REMOVE_TASK:
      return {
        displayItems: state.displayItems.filter((task) => task.id !== action.taskId)
      }
    default:
      return state
  }
}

export default Task
