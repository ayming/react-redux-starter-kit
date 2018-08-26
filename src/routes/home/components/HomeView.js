import React, { PureComponent } from 'react'

import Link from '../../../components/Link'
import s from './HomeView.scss'

class HomeView extends PureComponent {
  render() {
    return (
      <div className={s.wrapper}>
        <p>
          To get started, edit{' '}
          <code>src/routes/home/components/HomeView.js</code> and save to
          reload.
        </p>
        <Link to="/about">ABOUT</Link> <Link to="/counter">COUNTER</Link>
      </div>
    )
  }
}

export default HomeView
