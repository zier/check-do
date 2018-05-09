import React, { Component } from 'react'
import { Layout } from 'antd'

import Head from './Layout/Head'
import MainContent from './Layout/MainContent'
import RightSidebar from './Layout/RightSidebar'

import './App.css'

class App extends Component {
  render() {
    return (
      <Layout className="appLayout">
        <Head />
        <Layout hasSider={true}>
          <MainContent />
          <RightSidebar />
        </Layout>
      </Layout>
    )
  }
}

export default App
