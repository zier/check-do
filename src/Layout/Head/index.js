
import React from 'react';
import { Layout } from 'antd'
import SearchForm from '../../Components/SearchForm/SearchForm.js'

import './index.css'

const { Header } = Layout

const Head = () => {
  return (
    <Header className="headerApp">
      <SearchForm tagNames={[]}/>
    </Header>
  )
}

export default Head;
