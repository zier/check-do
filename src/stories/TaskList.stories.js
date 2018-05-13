import React from 'react';
import TaskList from '../Components/TaskList/TaskList.js';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export const emptyTask = []

export const tasks = [
  {
    id: "1",
    title: 'Go home',
    description: 'go to home after meeting',
    tags: ["family", "urgent"],
  },
  {
    id: "2",
    title: 'Buy Eggs',
    description: 'go to supermarket',
    tags: ["family"],
  },
  {
    id: "3",
    title: 'Playing Games',
    description: 'when come back home playing games',
    isDone: true,
    tags: ["work"],
  },
];

export const actions = {
  onTaskClickToggleDone: action('onTaskClickToggleDone'),
  onTaskClickDelete: action('onTaskClickDelete'),
};

storiesOf('TaskList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('with data', () => <TaskList state={'LOADED_TASKLIST'} tasks={tasks} {...actions}/>)
  .add('loading state', () => <TaskList state={'LOADING_TASKLIST'} />)
