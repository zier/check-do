import React from 'react';
import Task from '../Components/Task/Task.js';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Col, Row } from 'antd';

export const task = {
  title: 'Go home',
  description: 'go to home after meeting',
  isDone: false,
};


export const doneTask = {
  ...task,
  isDone: true,
};

export const actions = {
  onClickToggleDone: action('onClickToggleDone'),
  onClickDelete: action('onClickDelete'),
};

storiesOf('Task', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}><Row gutter={16}><Col span={8}>{story()}</Col></Row></div>)
  .add('with task', () => <Task {...task} {...actions} />)
  .add('with done task', () => <Task {...doneTask} {...actions} />)
