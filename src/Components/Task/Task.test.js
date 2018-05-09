import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Task from './Task.js'

describe('Task work correctly', () => {
  const props = {
    title: "title-test",
    description: "description-test",
    isDone: false,
  }

  const actions = {
    onClickToggleDone: jest.fn(),
    onClickDelete: jest.fn(),
  }

  const wrapper = shallow(<Task {...props} {...actions}/>)

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('props is work', () => {
    expect(wrapper.find('h4').text()).toBe(props.title)
    expect(wrapper.find('p').text()).toBe(props.description)
  })

  it('actions is work', () => {
    wrapper.find('.checkButton').simulate('click')
    wrapper.find('.closeButton').simulate('click')

    expect(actions.onClickToggleDone.mock.calls.length).toBe(1)
    expect(actions.onClickDelete.mock.calls.length).toBe(1)
  })

  it('task is Done', () => {
    wrapper.setProps({ isDone: false })
    expect(wrapper.find('h4')).toHaveStyle({ textDecoration: 'none' })
    expect(wrapper.find('p')).toHaveStyle({ textDecoration: 'none' })

    wrapper.setProps({ isDone: true })
    expect(wrapper.find('h4')).toHaveStyle({ textDecoration: 'line-through' })
    expect(wrapper.find('p')).toHaveStyle({ textDecoration: 'line-through' })
  })
})

