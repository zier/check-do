import * as React from 'react';
import { Row } from 'antd';
import CheckItem from './CheckItem';

class CheckList extends React.Component {
  render() {
    return (
      <div style={{ padding: '30px' }}>
        <Row gutter={16}>
          <CheckItem/>
          <CheckItem/>
          <CheckItem/>
          <CheckItem/>
          <CheckItem/>
          <CheckItem/>
        </Row>
      </div>
    );
  }
}

export default CheckList;
