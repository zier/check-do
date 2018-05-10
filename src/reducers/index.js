import { combineReducers } from 'redux'
import Task from './task'
import Tag from './tag'

const reducers = combineReducers({
  Task,
  Tag
});

const initialState = {
  Task: {
    displayItems: []
  },
  Tag: {
    items: [
      'work',
      'family',
      'urgent'
    ]
  }
};

export {
  reducers,
  initialState
}
