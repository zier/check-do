const TaskList = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        displayItems: [
          ...state.displayItems,
          action.task
        ]
      }
    case 'REMOVE_TASK':
      const newList = state.TaskList.filter((task) => task.id !== action.id)

      return {
        ...state,
        TaskList: newList
      }
    default:
      return state
  }
}

export default TaskList
