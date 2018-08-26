/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import NotFound from './NotFound'

describe('NotFound', () => {
  test('renders correctly', () => {
    const wrapper = renderer.create(<NotFound />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
