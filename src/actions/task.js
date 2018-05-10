export const ADD_TASK = 'ADD_TASK'
export const REMOVE_TASK = 'REMOVE_TASK'
export const TOGGLE_DONE_TASK = 'TOGGLE_DONE_TASK'
export const addTask = (task) => {
  task.id = '_' + Math.random().toString(36).substr(2, 9)
  return {
    type: ADD_TASK,
    task
  }
}

export const removeTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    taskId
  }
}

export const toggleDoneTask = (taskId) => {
  return {
    type: TOGGLE_DONE_TASK,
    taskId
  }
}
