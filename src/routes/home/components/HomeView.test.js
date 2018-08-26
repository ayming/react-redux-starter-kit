/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import HomeView from './HomeView'

describe('HomeView', () => {
  test('renders correctly', () => {
    const wrapper = renderer.create(<HomeView />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
