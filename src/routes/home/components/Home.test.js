/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Home from './Home'

describe('Home', () => {
  test('renders correctly', () => {
    const wrapper = renderer.create(<Home />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
