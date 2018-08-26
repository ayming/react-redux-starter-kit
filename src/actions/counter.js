import { createActions } from 'redux-actions'

const { counter } = createActions({
  COUNTER: {
    INCREMENT: (amount = 1) => ({ amount }),
    DECREMENT: (amount = 1) => ({ amount: -amount }),
  },
})

export default counter
