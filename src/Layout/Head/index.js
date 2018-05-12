
import React from 'react';
import { Layout, Row, Col } from 'antd'
import SearchForm from '../../Components/SearchForm'

import './index.css'

const { Header } = Layout

const Head = ({ onClickAddTask }) => {
  return (
    <Header className="headerApp">
      <Row>
        <Col>
          <SearchForm />
        </Col>
      </Row>
    </Header>
  )
}

export default Head;
