import React from 'react'
import PropTypes from 'prop-types'
import { Form, Select, Button, Input, Mention } from 'antd'

const { toString } = Mention
const FormItem = Form.Item
const Option = Select.Option

const TaskFormAntD = ({ onSubmit, tagNames, form }) => {
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
        let stringTags = toString(values.tags)
        let arrayTags = stringTags.replace(/\s/g, "").split('#')

        if (stringTags !== '') {
          values.tags = arrayTags.length > 0 ? arrayTags.slice(1) : []
        }

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
          getFieldDecorator('tags')(
            <Mention
              prefix={['#']}
              suggestions={tagNames}
              placeholder="eg. #work"
              notFoundContent="not found #"
            />
          )
        }
      </FormItem>

      <FormItem wrapperCol={{ span: 12, offset: 6 }}>
        <Button type="primary" htmlType="submit">Add</Button>
      </FormItem>
    </Form>
  )
}

TaskFormAntD.propTypes = {
  onSubmit: PropTypes.func,
  tagNames: PropTypes.array
}

const TaskForm = Form.create()(TaskFormAntD)
export default TaskForm
