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
      const newDisplayItems = state.displayItems.map(item => {
        if (item.id === action.taskId) {
          return {
            ...item,
            isDone: !item.isDone,
          }
        }

        return item
      })

      return {
        displayItems: newDisplayItems
      }
    case REMOVE_TASK:
      const newList = state.displayItems.filter((task) => task.id !== action.taskId)

      return {
        displayItems: newList
      }
    default:
      return state
  }
}

export default Task
