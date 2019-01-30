import { RECEIVE_USER } from '../actions/users'

export default function user (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, ...action.users }
    default:
      return state
  }
}
