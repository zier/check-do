import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import TaskList from './TaskList.js'
import Task from '../Task/Task.js'

describe('TaskList work correctly', () => {
  const tasks = [
    {
      id: "1",
      title: 'Go home',
      description: 'go to home after meeting',
      tags: ["family", "urgent"],
    },
    {
      id: "2",
      title: 'Buy Eggs',
      description: 'go to supermarket',
      tags: ["family"],
    }
  ];

  // const actions = {
  //   onClickToggleDone: jest.fn(),
  //   onClickDelete: jest.fn(),
  // }

  const wrapper = shallow(<TaskList tasks={tasks} />)

  it('renders correctly', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should have 2 task', () => {
    expect(wrapper.find(Task)).toHaveLength(2)
  })

})
