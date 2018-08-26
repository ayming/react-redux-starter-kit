import React from 'react'

import Layout from '../../components/Layout'
import HomeView from './components/HomeView'

function action() {
  return {
    chunks: ['home'],
    title: 'Home',
    component: (
      <Layout>
        <HomeView />
      </Layout>
    ),
  }
}

export default action
