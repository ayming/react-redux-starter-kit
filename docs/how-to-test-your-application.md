## Testing your application

### Used libraries

React Redux starter Kit comes with the following libraries for testing purposes:

- [Jest](https://jestjs.io/) - Delightful JavaScript Testing for React

You may also want to take a look at the following related packages:

- [Mocha](https://mochajs.org/) - Node.js and browser test runner
- [Chai](http://chaijs.com/) - Assertion library
- [Enzyme](https://github.com/airbnb/enzyme) - Testing utilities for React
- [jsdom](https://github.com/tmpvar/jsdom)
- [react-addons-test-utils](https://www.npmjs.com/package/react-addons-test-utils)

### Running tests

To test your application simply run the `yarn test` command which will:
- recursively find all files ending with `.test.js` in your `src/` directory
- jest execute found files

```bash
yarn test
```

### Conventions

- test filenames MUST end with `test.js` or `yarn test` will not be able to detect them
- test filenames SHOULD be named after the related component (e.g. create `Login.test.js` for
`Login.js` component)

### Basic example

To help you on your way, the following basic test case you can use as a starting point:

```js
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../App'
import Layout from './Layout'

describe('Layout', () => {
  test('renders children correctly', () => {
    const wrapper = renderer
      .create(
        <App context={{ pathname: '' }}>
          <Layout>
            <div className="child" />
          </Layout>
        </App>,
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot()
  })
})
```

### React-intl exampleß

React-intl users MUST render/wrap components inside an IntlProvider like the example below:

The example below example is a drop-in test for the `Header` component:

```js
import React from 'react'
import Header from './Header'
import IntlProvider from 'react-intl'
import Navigation from '../../components/Navigation'

describe('A test suite for <Header />', () => {

  it('should contain a <Navigation/> component', () => {
    it('rendering', () => {
      const wrapper = renderIntoDocument(
        <IntlProvider locale="en">
          <Header />
        </IntlProvider>
      )
      expect(wrapper.find(Navigation)).to.have.length(1)
    })
  })

})
```

Please note that  NOT using IntlProvider will produce the following error:

> Invariant Violation: [React Intl] Could not find required `intl` object. <IntlProvider>
> needs to exist in the component ancestry.

### Linting

In order to check if your JavaScript and CSS code follows the suggested style guidelines run:

```bash
yarn lint
```

### Next article

[How to create new page](how-to-create-new-page.md)
