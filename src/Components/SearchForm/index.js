import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'

const Option = Select.Option

const SearchForm = ({ onChange, tagNames }) => {
  const children = []
  tagNames.forEach(tag => {
    children.push(<Option key={'#' + tag}>#{tag}</Option>)
  })

  return (
    <Select
      mode="multiple"
      style={{ width: '100%' }}
      placeholder="input # to mention tag, eg. #work"
      onChange={onChange}
      notFoundContent="not found #"
    >
      {children}
    </Select>
  )
}

SearchForm.propTypes = {
  onChange: PropTypes.func,
  tagNames: PropTypes.array
}

export default SearchForm
