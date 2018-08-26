/* eslint-env jest */
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../App'
import Layout from './Layout'
import noop from '../../utils/noop'

describe('Layout', () => {
  test('renders children correctly', () => {
    const wrapper = renderer
      .create(
        <App
          context={{
            pathname: '',
            injectReducer: noop,
            store: {
              dispatch: noop,
              getState: noop,
              subscribe: noop,
            },
          }}
        >
          <Layout>
            <div className="child" />
          </Layout>
        </App>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
