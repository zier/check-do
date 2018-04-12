import * as React from 'react';
import { Card, Col } from 'antd';

class CheckItem extends React.Component {
  render() {
    return (
      <Col span={6}>
        <Card title="Card title" style={{margin: '5px'}} bordered={false}>Card content</Card>
      </Col>
    );
  }
}

export default CheckItem;
