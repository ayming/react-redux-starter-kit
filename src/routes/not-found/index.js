import React from 'react'

import Layout from '../../components/Layout'
import NotFound from './components/NotFound'

function action() {
  return {
    chunks: ['not-found'],
    title: 'Page Not Found',
    component: (
      <Layout>
        <NotFound />
      </Layout>
    ),
  }
}

export default action
