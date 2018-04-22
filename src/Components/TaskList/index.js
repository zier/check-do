import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Col, Row } from 'antd';
import Task from '../Task';

const TaskList = ({ tasks, state, onSelectTask }) => {
  if (state === 'LOADING_TASKLIST') {
    return (
      <Row gutter={16}>
        <Col span={8}><Card loading title="Loading" /></Col>
      </Row>
    )
  }

  return (
    <Row gutter={16}>
      {
        tasks.map((task, index) => {
          return <Col span={8}><Task onClick={onSelectTask} {...task}  key={index}/></Col>
        })
      }
    </Row>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  state: PropTypes.string,
  onSelectTask: PropTypes.func
};

export default TaskList;
