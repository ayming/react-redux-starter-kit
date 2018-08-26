import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Link from '../../../components/Link'
import s from './Counter.scss'

class Counter extends PureComponent {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
  }

  handleIncrementClick = () => {
    const { increment } = this.props
    increment()
  }

  handleDecrementClick = () => {
    const { decrement } = this.props
    decrement()
  }

  render() {
    const { counter } = this.props
    return (
      <div className={s.wrapper}>
        <p>
          Counter: {counter}{' '}
          <button type="button" onClick={this.handleIncrementClick}>
            +
          </button>
          <button type="button" onClick={this.handleDecrementClick}>
            -
          </button>
        </p>
        <Link to="/">HOME</Link> <Link to="/about">ABOUT</Link>
      </div>
    )
  }
}

export default Counter
