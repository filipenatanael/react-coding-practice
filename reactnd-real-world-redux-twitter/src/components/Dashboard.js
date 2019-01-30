import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3 className='center'>Your Timeline</h3>
        <ul className='dashboard-list'>
          { this.props.tweetIds.map((id) => (
            <li key={id}>
              <Tweet id={id} />
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ tweets }) {
  return {
    tweetIds: OrderByDescending(tweets)
  }
}

export default connect(mapStateToProps)(Dashboard)

/*
To compare numbers instead of text, the comparison function can simply subtract b from a.
The function below will sort the array in descending  order:
*/

function OrderByDescending(tweets) {
  return Object.keys(tweets)
    .sort((a,b) => tweets[b].timestamp - tweets[a].timestamp)
}
