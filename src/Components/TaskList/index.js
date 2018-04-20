import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Col, Row } from 'antd';
import Task from '../Task';

class TaskList extends Component {
  render() {
    const { tasks, state, onSelectTask } = this.props

    return (
      <Row gutter={16}>
        {
          state == 'LOADED_TASKLIST' && tasks.map((task, index) => {
            return <Col span={8}><Task onClick={onSelectTask} {...task}  key={index}/></Col>
          })
        }

        {
          state === 'LOADING_TASKLIST' && (
            <Col span={8}>
              <Card loading title="Loading" />
            </Col>
          )
        }
      </Row>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  state: PropTypes.string,
  onSelectTask: PropTypes.func
};

export default TaskList;
