import React, { PureComponent } from 'react'

import s from './NotFoundView.scss'

class NotFoundView extends PureComponent {
  render() {
    return (
      <div className={s.wrapper}>
        <div className={s.container}>
          <h1>Error 404</h1>
          <p>Sorry, the page you were trying to view does not exist.</p>
        </div>
      </div>
    )
  }
}

export default NotFoundView
