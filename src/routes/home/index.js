import React from 'react'

import Layout from '../../components/Layout'
import Home from './components/Home'

function action() {
  return {
    chunks: ['home'],
    title: 'Home',
    component: (
      <Layout>
        <Home />
      </Layout>
    ),
  }
}

export default action
