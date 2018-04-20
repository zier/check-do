import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card } from 'antd';

class Task extends Component {
  render() {
    const { title, description, onClick } = this.props

    return (
      <Card onClick={onClick} title={title} bordered={true}>
        {description}
      </Card>
    );
  }
}

Task.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onClick: PropTypes.func
};

export default Task;
