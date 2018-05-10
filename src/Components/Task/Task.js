import React from 'react';
import PropTypes from 'prop-types';

import { Card, Icon } from 'antd';

import './Task.css'

const Task = ({ id, title, description, onClickToggleDone, onClickDelete, isDone }) => {
  let textLineThrough = {
    textDecoration: 'none',
  }

  if (isDone) {
    textLineThrough.textDecoration = 'line-through';
  }

  const onClickToggleTask = () => {
    onClickToggleDone(id)
  }

  const onClickDeleteTask = () => {
    onClickDelete(id)
  }

  return (
    <Card style={{ padding: '0px' }} bordered={true}>
      <div className="control-buttons">
        <Icon onClick={onClickToggleTask} className="checkButton" type={isDone ? 'check-circle' : 'check-circle-o'} />
        <Icon onClick={onClickDeleteTask} className="closeButton" type="close" />
      </div>
      <h4 style={textLineThrough}>{title}</h4>
      <p style={textLineThrough}>{description}</p>
    </Card>
  )
}

Task.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isDone: PropTypes.bool,
  onClickToggleDone: PropTypes.func,
  onClickDelete: PropTypes.func
};

export default Task;
