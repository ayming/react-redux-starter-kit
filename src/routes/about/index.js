import React from 'react'

import Layout from '../../components/Layout'
import AboutView from './components/AboutView'

function action() {
  return {
    chunks: ['about'],
    title: 'About',
    component: (
      <Layout>
        <AboutView />
      </Layout>
    ),
  }
}

export default action
