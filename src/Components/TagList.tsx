import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';

class TagList extends React.Component {
  static propTypes = {
    tags: PropTypes.array,
  }

  render() {
    return (
      <p>
       {this.props.tags.map((tag: object) => <Tag color="{{tag.color}}">{tag.name}</Tag>}
      </p>
    );
  }
}

export default TagList;
