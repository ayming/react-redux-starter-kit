import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const contextType = {
  pathname: PropTypes.string.isRequired,
  query: PropTypes.shape({}),
}

class App extends PureComponent {
  static propTypes = {
    context: PropTypes.shape(contextType).isRequired,
    children: PropTypes.element.isRequired,
  }

  static childContextTypes = contextType

  getChildContext() {
    const { context } = this.props
    return context
  }

  render() {
    const { children } = this.props
    // NOTE: If you need to add or modify header, footer etc. of the app,
    // please do that inside the Layout component.
    return React.Children.only(children)
  }
}

export default App
