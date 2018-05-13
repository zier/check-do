import React from 'react';
import PropTypes from 'prop-types';

import { Card, Tag, Icon  } from 'antd';

import './Task.css'

const Task = ({ id, title, description, isDone, tags, onClickToggleDone, onClickDelete }) => {
  // region Event: Buttons
  const onClickToggleTask = () => {
    onClickToggleDone(id)
  }

  const onClickDeleteTask = () => {
    onClickDelete(id)
  }
  // endregion

  let textLineThrough = { textDecoration: 'none' }
  if (isDone) {
    textLineThrough.textDecoration = 'line-through';
  }

  return (
    <Card style={{ padding: '0px' }} bordered={true}>
      <div className="control-buttons">
        <Icon onClick={onClickToggleTask} className="checkButton" type={isDone ? 'check-circle' : 'check-circle-o'} />
        <Icon onClick={onClickDeleteTask} className="closeButton" type="close" />
      </div>
      <h4 style={textLineThrough}>{title}</h4>
      <p style={textLineThrough}>{description}</p>
      {tags.map(tag => <Tag key={tag} className="taskTag">{tag}</Tag>)}
    </Card>
  )
}

Task.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  isDone: PropTypes.bool,
  tags: PropTypes.array.isRequired,
  onClickToggleDone: PropTypes.func,
  onClickDelete: PropTypes.func
}

export default Task;
