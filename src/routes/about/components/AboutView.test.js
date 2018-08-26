/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import AboutView from './AboutView'

describe('AboutView', () => {
  test('renders correctly', () => {
    const wrapper = renderer.create(<AboutView />).toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
