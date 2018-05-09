
import React from 'react';
import { Layout } from 'antd'
import TaskForm from '../../Components/TaskForm'

import './index.css'

const { Sider } = Layout

const RightSiderbar = () => {
  return (
    <Sider className="rightSidebar" width="350">
      <TaskForm tagNames={[]} />
    </Sider>
  )
}

export default RightSiderbar;
