
import React from 'react';
import { Layout } from 'antd'
import TaskList from '../../Components/TaskList'
import './index.css'

const { Content } = Layout

const MainContent = () => {
  return (
    <Content className="mainContent">
      <TaskList tasks={[]} />
    </Content>
  )
}

export default MainContent;
