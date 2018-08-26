/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import Header from './Header'

describe('Header', () => {
  test('renders correctly', () => {
    const wrapper = renderer.create(<Header />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
