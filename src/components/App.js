import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Provider as ReduxProvider } from 'react-redux'

const contextType = {
  pathname: PropTypes.string.isRequired,
  query: PropTypes.shape({}),
  // Inject reducer everywhere
  injectReducer: PropTypes.func.isRequired,
  // Integrate Redux
  // http://redux.js.org/docs/basics/UsageWithReact.html
  ...ReduxProvider.childContextTypes,
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
