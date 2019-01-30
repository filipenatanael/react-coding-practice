import { RECEIVE_TWEETS, TOGGLE_TWEET } from '../actions/tweets'

export default function user (state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS:
      return {
        ...state,
        ...action.tweets
      }
    case TOGGLE_TWEET:
      return {
        ...state,
        [action.id]:{
          ...state[action.id],
          likes: action.hasLiked === true // Já curtiu ? então descute : curti o tweet
          ? state[action.id].likes.filter((uid) => uid !== action.authedUser)
          : state[action.id].likes.concat([action.authedUser])
        }
      }
    default:
      return state
  }
}


// let tweets = {
//   "8xf0y6ziyjabvozdd253nd": {
//     id: "8xf0y6ziyjabvozdd253nd",
//     text: "Shoutout to all the speakers I know for whom English is not a first language, but can STILL explain a concept well. It's hard enough to give a good talk in your mother tongue!",
//     author: "sarah_edo",
//     timestamp: 1518122597860,
//     likes: ['tylermcginnis'],
//     replies: ['fap8sdxppna8oabnxljzcv', '3km0v4hf1ps92ajf4z2ytg'],
//     replyingTo: null,
//   },
//   "5c9qojr2d1738zlx09afby": {
//     id: "5c9qojr2d1738zlx09afby",
//     text: "I hope one day the propTypes pendulum swings back. Such a simple yet effective API. Was one of my favorite parts of React.",
//     author: "tylermcginnis",
//     timestamp: 1518043995650,
//     likes: ['sarah_edo', 'dan_abramov'],
//     replies: ['njv20mq7jsxa6bgsqc97'],
//     replyingTo: null,
//   },
// }
