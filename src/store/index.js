import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducer from 'reducers'

import people from 'store/people'
import user from 'store/user'

const store = createStore(reducer, {
  people,
  user
}, applyMiddleware(reduxThunk))

export default store
