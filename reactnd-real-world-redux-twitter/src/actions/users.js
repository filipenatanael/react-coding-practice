export const RECEIVE_USERS = 'RECEIVE_USERS'

exports function receiveUsers(tweets) {
  return {
    type: RECEIVE_USERS,
    tweets
  }
}
