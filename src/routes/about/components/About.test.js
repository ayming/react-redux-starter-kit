/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import About from './About'

describe('About', () => {
  test('renders correctly', () => {
    const wrapper = renderer.create(<About />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
