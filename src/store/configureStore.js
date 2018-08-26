import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import { makeRootReducer } from './reducers'
import createHelpers from './createHelpers'
import createLogger from './logger'

export default function configureStore(initialState, helpersConfig) {
  const isDebug = process.env.NODE_ENV === 'development'
  const helpers = createHelpers(helpersConfig)
  const middleware = [thunk.withExtraArgument(helpers)]

  let enhancer

  if (isDebug) {
    middleware.push(createLogger())

    // https://github.com/zalmoxisus/redux-devtools-extension#14-using-in-production
    const composeEnhancers = composeWithDevTools({
      // Options: https://github.com/zalmoxisus/redux-devtools-extension/blob/master/docs/API/Arguments.md#options
      name: `${__NAME__}@${__VERSION__}`,
    })

    // https://redux.js.org/docs/api/applyMiddleware.html
    enhancer = composeEnhancers(applyMiddleware(...middleware))
  } else {
    enhancer = applyMiddleware(...middleware)
  }

  // See https://redux.js.org/docs/api/createStore.html
  const store = createStore(makeRootReducer(), initialState, enhancer)
  store.asyncReducers = {}

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (isDebug && module.hot) {
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line global-require
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
