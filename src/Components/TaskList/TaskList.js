import React from 'react'
import PropTypes from 'prop-types'

import { Card, Col, Row } from 'antd'

import Task from '../Task/Task'
import './TaskList.css'

const TaskList = ({ tasks, state, onTaskClickToggleDone, onTaskClickDelete }) => {
  if (state === 'LOADING_TASKLIST') {
    return (
      <Row className="taskList" gutter={16}>
        <Col span={8}><Card loading /></Col>
      </Row>
    )
  }

  return (
    <Row className="taskList" gutter={16}>
      {
        tasks.map((task, index) => {
          return  <Col key={task.id} className="taskListItem" span={8}>
                    <Task onClickToggleDone={onTaskClickToggleDone} onClickDelete={onTaskClickDelete} {...task}  key={index}/>
                  </Col>
        })
      }
    </Row>
  )
}

TaskList.propTypes = {
  tasks: PropTypes.array,
  state: PropTypes.string,
  onTaskClickToggleDone: PropTypes.func,
  onTaskClickDelete: PropTypes.func
}

export default TaskList
