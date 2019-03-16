import { RECEIVE_ENTRIES, ADD_ENTRY } from '../actions'

function entries(state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES:
      return {
        ...state,
        ...action.entries
      }
    case ADD_ENTRY:
      return {
        ...state,
        ...action.entry
      }
      /* {
          "2017-12-19": {
             ...
           }
         } */
    default:
      return state
  }
}

export default entries
