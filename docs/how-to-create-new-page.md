## How to create new page

Let assume you want to create a page named `demo`. Here is the minimum steps:
1. [Route](#route)
1. [Page View](#page-view)
1. [Component](#component)
1. [Redux](#redux)

### Route

#### `src/routes/index.js`

Code splitting through Webpack chunks

```js
children: [
  ...
  // Keep in mind, routes are evaluated in order
  {
    path: '',
    load: () => import(/* webpackChunkName: 'demo' */ './demo'),
  },
```

#### `src/routes/demo/index.js`

By default the router calls the `action` function of matched route. Page structure will be constructed by `<Layout>` component.

```js
import React from 'react'
import Layout from 'components/Layout'
import DemoView from './components/DemoView'

function action() {
  return {
    title: 'Demo Page',
    component: (
      <Layout>
        <RegisterView title={title} />
      </Layout>
    ),
  }
}

export default action
```

### Page View

#### `src/routes/demo/components/DemoView.js`

Page's entry point is named as `<Page>View`. `PureComponent` is prefered in generic.

```js
import React, { PureComponent } from 'react'
import DemoItem from './DemoItem'
import s from './DemoView.scss'

class DemoView extends PureComponent {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Demo Page</h1>
          <DemoItem />
        </div>
      </div>
    )
  }
}

export default DemoView
```

**Note**: [When should I use stateless component?](https://hackernoon.com/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc)

#### `src/routes/demo/components/DemoView.scss`

1st level css class must be named as `wrapper`.

```scss
.wrapper {
  padding-left: 20px;
  padding-right: 20px;
}

.container {
  margin: 0 auto;
}
```

### Component

#### `src/routes/demo/components/DemoItem/DemoItem.js`

Page component is wrapped with its own folder.

```js
import React, { PureComponent } from 'react'

class DemoItem extends PureComponent {
  render() {
    return <h1>Demo Item</h1>
  }
}

export default DemoItem
```

### Redux

Redux structure of page is not much difference to project root.

```
.
├── /src/routes/demo/           # The root of the page
│   ├── /actions/               # Redux actions
│   ├── /containers/            # Container components
│   ├── /reducers/              # React reducers
│   ├── /selectors.js           # Select within current page store
│   └── ...
└── ...
```

**If you don't know Redux well, you should [read about it first](http://redux.js.org/docs/basics/index.html).**

* [redux-actions](https://github.com/reduxactions/redux-actions)
* [reselect](https://github.com/reactjs/reselect)

### Next article

[How to implement routing](how-to-implement-routing.md)
