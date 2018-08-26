## Data Fetching

[axios](https://github.com/axios/axios) is promise based HTTP client for the browser and node.js. Redux has taken the web development by storm, and after the success of react and flux, it has made the flux philosophy more accessible through its simplified approach. There are many methods to integrate API calls with redux. A simplified approach to calling APIs with `redux-thunk` allowing you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch and getState as parameters.

It can be used from either routing level or from inside your React components as follows:

#### React Action

#### `src/actions/post.js`

```js
// ...
const request = createAction('/USER/FETCH/REQUEST')
const success = createAction('/USER/FETCH/SUCCESS')
const failure = createAction('/USER/FETCH/FAILURE')

export const getPost = id => async (dispatch) => {
  try {
    dispatch(request(id))
    const resp = await fetch(`/api/posts/${params.id}`, { method: 'GET' })
    const data = await resp.json()
    dispatch(success(data))
    return data
  } catch (error) {
    dispatch(failure(error))
    return error
  }
}

export default { getPost }
```

#### Route Example

```js
// ...
import getPost from 'actions/post'

async function action({ store, injectReducer }) {
  // Add the reducer to the store
  injectReducer(store, { key: 'post', reducer })
  // Fetch example
  await store.dispatch(getPost(1))
  return {
    chunks: ['post'],
    title,
    component: (
      <Layout>
        <PostView />
      </Layout>
    ),
  }
}
```

#### React Container Example

```js
import { connect } from 'react-redux'
import getPost from 'actions/post'
import Post from '../components/Post'

const mapDispatchToProps = {
  getPost,
}

const mapStateToProps = (state) => state.post

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Post)
```

### Next article

[How to integrate redux](how-to-integrate-redux.md)
