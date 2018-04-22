import React, { Component } from 'react';
import PropTypes from 'prop-types';
import gl from 'glamorous';

import { Card, Icon } from 'antd';

const Task = ({ title, description, onClick }) => {
  return (
    <Card style={{ padding: '0px' }} onClick={onClick} bordered={true}>
      <div className="control-buttons">
        <Icon className="checkButton" type="check-circle-o" />
        <Icon className="closeButton" type="close" />
      </div>
      <h4>{title}</h4>
      <p>{description}</p>
    </Card>
  )
}

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func,
  onClickComplete: PropTypes.func,
  onClickDelete: PropTypes.func
};

export default Task;
