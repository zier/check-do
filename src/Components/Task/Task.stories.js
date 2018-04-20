import React from 'react';
import Task from '../Task';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

export const task = {
  title: 'Go home',
  description: 'go to home after meeting',
};

export const actions = {
  onClick: action('onClickTask'),
};


storiesOf('Task', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}>{story()}</div>)
  .add('with data', () => <Task {...task} {...actions} />)
