import { combineReducers } from 'redux'

import people from 'reducers/people'
import user from 'reducers/user'

export default combineReducers({
  people,
  user
})
