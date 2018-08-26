import React, { PureComponent, Fragment } from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'
import './Layout.scss'

class Layout extends PureComponent {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props
    return (
      <Fragment>
        <Header />
        {children}
      </Fragment>
    )
  }
}

export default Layout
