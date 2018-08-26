/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import NotFoundView from './NotFoundView'

describe('NotFound', () => {
  test('renders correctly', () => {
    const wrapper = renderer.create(<NotFoundView />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
