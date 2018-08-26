import React, { PureComponent } from 'react'

import Link from '../../../components/Link'
import s from './About.scss'

class About extends PureComponent {
  render() {
    return (
      <div className={s.wrapper}>
        <p>
          This starter kit is designed to get you up and running with a bunch of
          awesome front-end technologies.
        </p>
        <Link to="/">HOME</Link>
      </div>
    )
  }
}

export default About
