# React Redux Starter Kit

This project is based on [create-react-app](https://github.com/facebook/create-react-app) and integrated the libraries from [react-starter-kit](https://github.com/kriasoft/react-starter-kit). [create-react-app](https://github.com/facebook/create-react-app) is a boilerplate for jump starting your React projects. It provides limited features at the begining and you have to config it by yourself. [create-react-app](https://github.com/facebook/create-react-app) is an opinionated boilerplate helping you to stay productive following the best practices. It gives you many features you may not want. Therefore, this is a base project try to strike a balance between them.

## Requirements

* node `^8.0.0`
* yarn `^1.6.0` or npm `^5.6.0`

## Installation

It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management. `npm install` will suffice if `resolutions` in `package.json` is handled correctly.

```bash
$ yarn  # Install project dependencies
```

## Running the Project

After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn start  # Start the development server (or `npm start`)
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start`            |Serves your app at `localhost:3000`|
|`build`            |Builds the application to `./build`|
|`build:serve`      |Builds the application and serves it as a static site.|
|`build:stats`      |Visualize bundle content as convenient interactive zoomable treemap.|
|`build:clean`      |Empty the `./build` folder|
|`lint`             |[Lints](http://stackoverflow.com/questions/8503559/what-is-linting) the project for potential errors|
|`lint:fix`         |Lints the project and fixes all correctable errors|
|`lint:js`          |Linting for JavaScript|
|`lint:js:fix`      |Lints the project and [fixes all correctable errors](http://eslint.org/docs/user-guide/command-line-interface.html#fix) for JavaScript|
|`lint:css`         |Linting for CSS|
|`lint:css:fix`     |Lints the project and [fixes all correctable errors](https://stylelint.io/user-guide/faq/#how-do-i-automatically-fix-stylistic-violations) for JavaScript|
|`test`             |Runs unit tests with Jest.|
|`test:cover`       |Open code coverage report.|
|`test:clean`       |Empty the `./coverage` folder|

## Code recipes

* [How to create new page](docs/how-to-create-new-page.md)
* [How to implement routing](docs/how-to-implement-routing.md)
* [How to fetch data](docs/how-to-fetch-data.md)
* [How to integrate redux](docs/how-to-integrate-redux.md)
* [How to style react component](docs/how-to-style-react-component.md)
* [How to test your application](docs/how-to-test-your-application.md)

## Application Structure

The application structure presented in this boilerplate is **fractal**, where functionality is grouped primarily by feature rather than file type. Please note, however, that this structure is only meant to serve as a guide, it is by no means prescriptive. That said, it aims to represent generally accepted guidelines and patterns for building scalable applications.

```
.
├── /build/                     # The folder for compiled output
├── /docs/                      # Documentation files for the project
├── /node_modules/              # 3rd-party libraries and utilities
├── /config/                    # Project configurations
│   ├── /env.js                 # Load environment variables from .env* files
│   ├── /webpack.config.dev.js  # Configurations for development bundles
│   └── /webpack.config.prod.js # Configurations for production bundles
├── /public/                    # Static files which are copied into the /build/public folder (DON'T import the assets from this folder)
├── /src/                       # The source code of the application
│   ├── /actions/               # Redux actions
│   ├── /assets/                # Global assets shared by multiple components (Not preferred)
│   ├── /components/            # React components
│   ├── /constants/             # Generic constants
│   ├── /containers/            # Reusable container components
│   ├── /reducers/              # React reducers
│   ├── /routes/                # Page/screen components along with the routing information
│   ├── /selectors/             # Compute derived data to store the minimal possible state
│   ├── /store/                 # Redux-specific pieces
│   │   ├── /configureStore.js  # Create and instrument redux store
│   │   └── /reducers.js        # Reducer registry and injection
│   ├── /utils/                 # Application utility functions
│   ├── /index.js               # JavaScript entry point
│   ├── /config.js              # Global application settings
│   └── ...                     # Other core framework modules
├── /test/                      # Unit and end-to-end tests
├── package.json                # The list of 3rd party libraries and utilities
└── yarn.lock                   # Fixed versions of all the dependencies
```

### Recommendations

Here are some general recommendations that we have found useful. If you would like to add something, please submit a PR.

#### Parameters
* A boolean flag must prefix with `is` or `has` (e.g., isClicked)
* Common naming prefix: `prev`, `next` (e.g., prevProps, nextProps)
* Getter & setter functions: `get`, `set` (e.g., getUser, setUser)
* Event handler: props `on`, handler `handle` (e.g., <button onClick={this.handleClick} />)

#### Routes
* A route directory...
  - *Should* contain an `index.js` that returns route definition
  - **Optional:** assets, containers, redux modules, nested child routes

#### Store
* Keep your store as flat and normalized as possible. If you are dealing with deeply nested data structures, we recommend using a tool such as [normalizr](https://github.com/gaearon/normalizr).
* Note that the `injectReducer` helper can be repurposed to suit your needs.

#### Layouts
* Dictate major page structure

#### Components
* Prefer [pure components](https://reactjs.org/docs/react-api.html#reactpurecomponent)
* [Stateless functional components](https://reactjs.org/docs/components-and-props.html#stateless-functions) is also acceptable since react 16 adjusted the performance of rendering.
* Top-level `components` and `containers` directories contain reusable components

#### Containers
* Containers **only** `connect` presentational components to actions/state
  - Rule of thumb: **no JSX in containers**!
* One or many container components can be composed in a stateless functional components
* Tip: props injected by `universal-router` can be accessed using `connect`:
  ```js
    // CounterWithMusicContainer.js
    import { connect } from 'react-redux'
    import Counter from 'components/Counter'
    export const mapStateToProps = (state, ownProps) => ({
      counter: state.counter,
      music: ownProps.location.query.music // why not
    })
    export default connect(mapStateToProps)(Counter)

    // Location -> 'localhost:3000/counter?music=reggae'
    // Counter.props = { counter: 0, music: 'reggae' }
  ```

## Development

#### Developer Tools

**We recommend using the [Redux DevTools Chrome Extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd).**
Using the chrome extension allows your monitors to run on a separate thread and affords better performance and functionality. It comes with several of the most popular monitors, is easy to configure, filters actions, and doesn’t require installing any packages.

### Globals

These are global variables available to you anywhere in your source code. If you wish to modify them, they can be found as the `globals` key in `~/config/env.js`. When adding new globals, make sure you also add them to `~/.eslintrc`.

|Variable|Description|
|---|---|
|`process.env`|Environment variables from Webpack DefinePlugin|
|`__NAME__`|Project name from `package.json`|
|`__VERSION__`|Project version from `package.json`|

### Styles

Both `.scss` and `.css` file extensions are supported out of the box. After being imported, styles will be processed with [PostCSS](https://github.com/postcss/postcss) for minification and autoprefixing, and will be extracted to a `.css` file during production builds.

### Server

[webpack-dev-server](https://github.com/webpack/webpack-dev-server) uses [webpack](https://webpack.js.org/) with a development server that provides live reloading. **This should be used for development only**.

It uses [webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) under the hood, which provides fast in-memory access to the webpack assets.

## Package resolution

* It can reduce the built script size if you can resolve different versions of same package
* [Other reasons](https://yarnpkg.com/lang/en/docs/selective-version-resolutions/#toc-why-would-you-want-to-do-this)

#### Analyse

Visualize bundle content as convenient interactive zoomable treemap

```shell
$ yarn build:stats
```

* https://www.npmjs.com/package/webpack-bundle-analyzer

#### npm (deprecated: use `yarn` instead)

After installing packages using `npm install` or `npm install <package-name>` and updating your `node_modules` folder, you should run

```shell
$ npm shrinkwrap
```

* https://nodejs.org/en/blog/npm/managing-node-js-dependencies-with-shrinkwrap/
* http://ivanjov.com/what-is-npm-shrinkwrap-and-why-you-should-start-using-it-right-now/

**NOTE:** It is not easy to maintain both `npm` and `yarn`. We choose `yarn` as our final descision.

#### yarn

Add a resolutions field to your package.json file and define your version overrides:

package.json
```json
{
  "name": "project",
  "version": "1.0.0",
  "dependencies": {
    "left-pad": "1.0.0",
    "c": "file:../c-1",
    "d2": "file:../d2-1"
  },
  "resolutions": {
    "d2/left-pad": "1.1.1",
    "c/**/left-pad": "1.1.2"
  }
}
```
Then run `yarn install`.

* https://yarnpkg.com/lang/en/docs/selective-version-resolutions/#toc-how-to-use-it

### FYQ

#### yarn is ignoring my `resolutions` setting in `package.json`

This feature is introduced recently. Please upgrade to the latest version of yarn.

### Reference

* [create-react-app](docs/create-react-app.md)
* [react-starter-kit@0.5.1](https://github.com/kriasoft/react-starter-kit/blob/v0.5.1/docs/getting-started.md)

### Learn more

* [Our Best Practices for Writing React Components](https://engineering.musefind.com/our-best-practices-for-writing-react-components-dec3eb5c3fc8)
* [React, Reselect and Redux](https://medium.com/@parkerdan/react-reselect-and-redux-b34017f8194c)
* [How Redux Can Make You a Better Developer](https://medium.cobeisfresh.com/how-redux-can-make-you-a-better-developer-30a094d5e3ec)
* [Performance Optimizing](https://medium.com/front-end-hacking/performance-optimizing-a-react-single-page-app-a68985fa72cc)
