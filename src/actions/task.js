import { createActions } from 'redux-actions';

export const { addTask, removeTask, toggleDoneTask, filterTags } = createActions({
  ADD_TASK: (task) => {
    task.id = '_' + Math.random().toString(36).substr(2, 9)
    return { task }
  },
  REMOVE_TASK: (taskId) => ({ taskId }),
  TOGGLE_DONE_TASK: (taskId) => ({ taskId }),
  FILTER_TAGS: (tags) => ({ tags }),
})
