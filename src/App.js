import React, { Component } from 'react'
import { Layout } from 'antd'

import SearchForm from './Components/SearchForm'
import TaskList from './Components/TaskList'
import TaskForm from './Components/TaskForm'

const { Header, Sider, Content } = Layout

const testDataTagNames = ['test']
const testDataTasks = [
  {
    title: 'Go home',
    description: 'go to home after meeting',
  },
  {
    title: 'Buy Eggs',
    description: 'go to supermarket',
  },
  {
    title: 'Playing Games',
    description: 'when come back home playing games',
    isDone: true,
  },
]

class App extends Component {
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header>
          <SearchForm tagNames={testDataTagNames}/>
        </Header>
        <Layout hasSider={true}>
          <Content>
            <TaskList tasks={testDataTasks} />
          </Content>
          <Sider>
            <TaskForm tagNames={testDataTagNames} />
          </Sider>
        </Layout>
      </Layout>
    )
  }
}

export default App
