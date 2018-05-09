import React from 'react';
import TaskForm from '../Components/TaskForm/TaskForm.js';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Col, Row } from 'antd';


export const tagNames = {
  tagNames: ['work', 'family', 'life', 'hobby']
};

export const actions = {
  onSubmit: action('onSubmit')
};

storiesOf('TaskForm', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}><Row gutter={16}><Col span={16}>{story()}</Col></Row></div>)
  .add('with suggestion data', () => <TaskForm {...tagNames} {...actions} />)
