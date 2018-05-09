import { createStore, combineReducers } from 'redux'
import TaskList from './reducers/TaskList'
import TaskForm from './reducers/TaskForm'


const reducers = combineReducers({
  TaskList,
  TaskForm
});

const initialState = {
  TaskList: {
    displayItems: []
  },
  TaskForm: {
    tagNames: []
  }
};

const store = createStore(reducers, initialState);

export default store;
