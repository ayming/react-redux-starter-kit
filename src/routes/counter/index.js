import React from 'react'

import Layout from '../../components/Layout'
import CounterContainer from './containers/CounterContainer'

function action() {
  return {
    chunks: ['counter'],
    title: 'Counter',
    component: (
      <Layout>
        <CounterContainer />
      </Layout>
    ),
  }
}

export default action
