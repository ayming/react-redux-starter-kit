import React, { Component } from 'react'

import Link from '../Link'
import logo from './logo.svg'
import s from './Header.scss'

class Header extends Component {
  render() {
    return (
      <header className={s.wrapper}>
        <Link to="/">
          <img src={logo} className={s.logo} alt="logo" />
        </Link>
        <h1 className={s.title}>Welcome to React</h1>
      </header>
    )
  }
}

export default Header
