import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from 'reducers'

import people from 'store/people'

const store = createStore(reducer, {
  people
}, applyMiddleware(reduxThunk))

export default store
