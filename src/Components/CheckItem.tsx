import React from 'react';
import { Card, Col, Tag } from 'antd';

const { Meta } = Card;

class CheckItem extends React.Component {
  render() {
    return (
      <Col span={6}>
        <Card style={{margin: '5px'}} bordered={false}>
          <Meta
            title="Card title"
            description="This is the description"
          />
          <br/>
          <Tag color="#f50">deadline</Tag>
          <Tag color="#2db7f5">work</Tag>
          <Tag color="#87d068">family</Tag>
          <Tag color="#108ee9">hobby</Tag>
        </Card>
      </Col>
    );
  }
}

export default CheckItem;
