import { handleActions, combineActions } from 'redux-actions'
import counterAction from '../actions/counter'

const { increment, decrement } = counterAction

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0

export default handleActions(
  {
    [combineActions(increment, decrement)]: (state, { payload: { amount } }) =>
      state + amount,
  },
  initialState,
)
