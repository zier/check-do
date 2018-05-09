import React from 'react'
import PropTypes from 'prop-types'
import { Form, Select, Button, Input } from 'antd'

const FormItem = Form.Item
const Option = Select.Option

const TaskForm = ({ onSubmit, tagNames, form }) => {
  const optionTags = []
  tagNames.forEach(tag => {
    optionTags.push(<Option key={'#' + tag}>#{tag}</Option>)
  })

  const { getFieldDecorator } = form
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        onSubmit(values)
      } else {
        // TODO: implement error validation
      }
    })
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormItem label="Title" {...formItemLayout}>
        {
          getFieldDecorator('title', {
          rules: [{ required: true, message: 'Please input title task!', whitespace: true }],
        })(
          <Input placeholder="Input title task" />
        )}
      </FormItem>

      <FormItem label="Description" {...formItemLayout}>
        {
          getFieldDecorator('description', {
          rules: [{ required: false, message: 'Please input dsecription task!', whitespace: true }],
        })(
          <Input placeholder="Input description task" />
        )}
      </FormItem>

      <FormItem {...formItemLayout} label="Tags">
        {
          getFieldDecorator('tags', {
          rules: [{ type: 'array' }],
          })(
            <Select mode="multiple" placeholder="Please select tags">
              {optionTags}
            </Select>
          )
        }
      </FormItem>

      <FormItem wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">Create</Button>
      </FormItem>
    </Form>
  )
}

TaskForm.propTypes = {
  onSubmit: PropTypes.func,
  tagNames: PropTypes.array
}

const TaskFormD = Form.create()(TaskForm)
export default TaskFormD