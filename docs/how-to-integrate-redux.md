## How to Integrate [Redux](http://redux.js.org/index.html)

**If you don't know Redux well, you should [read about it first](http://redux.js.org/docs/basics/index.html).**


### Creating Actions

 1. Go to `src/actions/` and create file with appropriate name.

 2. Define both action names and actions here.

 3. If you need async actions, use [`redux-thunk`](https://github.com/gaearon/redux-thunk#readme).
    For inspiration on how to create async actions you can look at
    [`setLocale`](https://github.com/kriasoft/react-starter-kit/blob/feature/react-intl/src/actions/intl.js)
    action from `feature/react-intl`.
    See [Async Flow](http://redux.js.org/docs/advanced/AsyncFlow.html) for more information on this
    topic.


### Creating Reducer (aka Store)

 1. Go to [`src/reducers/`](https://github.com/kriasoft/react-starter-kit/tree/feature/redux/src/reducers) and create new file there.

    - Do not forget to always return `state`.
    - Never mutate provided `state`.
      If you mutate state, rendering of connected component will not be triggered because of `===` equality.
      Always return new value if you perform state update.
      You can use this construct: `{ ...state, updatedKey: action.payload.value, }`
    - Keep in mind that store state *must* be repeatable by replaying actions on it.
      For example, when you store timestamp, pass it into *action payload*.
      If you call REST API, do it in action. *Never do this in reducer!*

 2. Edit [`src/reducers/index.js`](https://github.com/kriasoft/react-starter-kit/tree/feature/redux/src/reducers/index.js), import your reducer and add it to root reducer created by
 [`combineReducers`](http://redux.js.org/docs/api/combineReducers.html)


### Connecting Components

You can use [`connect()`](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) High-Order Component from [`react-redux`](https://github.com/reactjs/react-redux#readme) package.

See [Usage With React](http://redux.js.org/docs/basics/UsageWithReact.html) on redux.js.org.


### Next article

[How to style react component](how-to-style-react-component.md)
