import React, { PureComponent } from 'react'

import Link from '../../../components/Link'
import s from './AboutView.scss'

class AboutView extends PureComponent {
  render() {
    return (
      <div className={s.wrapper}>
        <p>
          This starter kit is designed to get you up and running with a bunch of
          awesome front-end technologies.
        </p>
        <Link to="/">HOME</Link> <Link to="/counter">COUNTER</Link>
      </div>
    )
  }
}

export default AboutView
