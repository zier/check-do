import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, Tag, Icon  } from 'antd';

import './Task.css'
class Task extends Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    isDone: PropTypes.bool,
    tags: PropTypes.array.isRequired,
    onClickToggleDone: PropTypes.func,
    onClickDelete: PropTypes.func
  }

  // region Event: Buttons
  onClickToggleTask = () => {
    this.props.onClickToggleDone(this.props.id)
  }

  onClickDeleteTask = () => {
    this.props.onClickDelete(this.props.id)
  }
  // endregion

  render() {
    let textLineThrough = { textDecoration: 'none' }
    if (this.props.isDone) {
      textLineThrough.textDecoration = 'line-through';
    }

    const { isDone, title, description, tags } = this.props

    return (
      <Card style={{ padding: '0px' }} bordered={true}>
        <div className="control-buttons">
          <Icon onClick={this.onClickToggleTask} className="checkButton" type={isDone ? 'check-circle' : 'check-circle-o'} />
          <Icon onClick={this.onClickDeleteTask} className="closeButton" type="close" />
        </div>
        <h4 style={textLineThrough}>{title}</h4>
        <p style={textLineThrough}>{description}</p>
        {tags.map(tag => <Tag key={tag} className="taskTag">{tag}</Tag>)}
      </Card>
    )
  }
}

export default Task;
