
import React from 'react';
import { Layout } from 'antd'
import ContainerTaskForm from '../../Components/TaskForm'

import './index.css'

const { Sider } = Layout

const RightSiderbar = () => {
  return (
    <Sider className="rightSidebar" width="400">
      <ContainerTaskForm />
    </Sider>
  )
}

export default RightSiderbar;
