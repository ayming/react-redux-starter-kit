import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import history from '../../history'

function isLeftClickEvent(event) {
  return event.button === 0
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey)
}

class Link extends PureComponent {
  static propTypes = {
    to: PropTypes.string.isRequired,
    method: PropTypes.oneOf(['push', 'replace']),
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
  }

  static defaultProps = {
    method: 'push',
    onClick: null,
  }

  handleClick = event => {
    const { onClick, method, to } = this.props
    if (onClick) onClick(event)

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) {
      return
    }

    if (event.defaultPrevented === true) {
      return
    }

    event.preventDefault()
    history[method](to)
  }

  render() {
    const { to, children, ...props } = this.props
    return (
      <a href={to} {...props} onClick={this.handleClick}>
        {children}
      </a>
    )
  }
}

export default Link
