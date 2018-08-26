import React, { PureComponent } from 'react'

import Link from '../../../components/Link'
import s from './Home.scss'

class Home extends PureComponent {
  render() {
    return (
      <div className={s.wrapper}>
        <p>
          To get started, edit <code>src/routes/home/components/Home.js</code>{' '}
          and save to reload.
        </p>
        <Link to="/about">ABOUT</Link>
      </div>
    )
  }
}

export default Home
