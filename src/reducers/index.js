import { combineReducers } from 'redux'
import Task from './task'
import Tag from './tag'

export const reducers = combineReducers({
  Task,
  Tag
})
