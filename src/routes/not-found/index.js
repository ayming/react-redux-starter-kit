import React from 'react'

import Layout from '../../components/Layout'
import NotFoundView from './components/NotFoundView'

function action() {
  return {
    chunks: ['not-found'],
    title: 'Page Not Found',
    component: (
      <Layout>
        <NotFoundView />
      </Layout>
    ),
  }
}

export default action
