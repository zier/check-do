import React from 'react';
import Task from '../Components/Task';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Col, Row } from 'antd';

export const task = {
  title: 'Go home',
  description: 'go to home after meeting',
};

export const actions = {
  onClick: action('onClickTask'),
};

storiesOf('Task', module)
  .addDecorator(story => <div style={{ padding: '3rem' }}><Row gutter={16}><Col span={8}>{story()}</Col></Row></div>)
  .add('with data', () => <Task {...task} {...actions} />)
