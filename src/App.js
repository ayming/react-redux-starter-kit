import React, { Component } from 'react'

import logo from './logo.svg'
import s from './App.scss'

class App extends Component {
  render() {
    return (
      <div className={s.wrapper}>
        <header className={s.header}>
          <img src={logo} className={s.logo} alt="logo" />
          <h1 className={s.title}>Welcome to React</h1>
        </header>
        <p className={s.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App
