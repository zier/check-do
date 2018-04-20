import React from 'react';
import TaskList from '../Components/TaskList';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export const emptyTask = []

export const tasks = [
  {
    title: 'Go home',
    description: 'go to home after meeting',
  },
  {
    title: 'Buy Eggs',
    description: 'go to supermarket',
  },
];

export const actions = {
  onSelectTask: action('onSelectTask'),
};

storiesOf('TaskList', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('with data', () => <TaskList state={'LOADED_TASKLIST'} tasks={tasks} {...actions}/>)
  .add('loading state', () => <TaskList state={'LOADING_TASKLIST'} />)
