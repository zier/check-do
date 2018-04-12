import * as React from 'react';
import { Layout } from 'antd';

import LeftBar from './Components/LeftBar';
import CheckList from './Components/CheckList';

const { Header, Content, Sider } = Layout;

import './App.css';
// const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
            header
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <LeftBar/>
          </Sider>
          <Content>
            <CheckList/>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
