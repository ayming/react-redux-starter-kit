/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import CounterView from './CounterView'
import noop from '../../../utils/noop'

describe('CounterView', () => {
  test('renders correctly', () => {
    const wrapper = renderer
      .create(<CounterView counter={1} increment={noop} decrement={noop} />)
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
