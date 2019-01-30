export const RECEIVE_USERS = 'RECEIVE_USERS'

export function receiveUsers(tweets) {
  return {
    type: RECEIVE_USERS,
    tweets
  }
}
