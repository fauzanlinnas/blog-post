import { combineReducers } from 'redux'

import users from './users/reducers'
import posts from './posts/reducers'
import albums from './albums/reducers'

export default combineReducers({
  users,
  posts,
  albums,
})
