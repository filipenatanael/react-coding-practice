export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'

exports function receiveTweets(tweets) {
  return {
    type: RECEIVE_TWEETS,
    tweets
  }
}
