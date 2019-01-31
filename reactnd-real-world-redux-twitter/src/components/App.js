import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
// BrowserRouter listens for changes in the URL
// and makes sure that the correct screen shows up when the URL changes.
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

import Dashboard from './Dashboard'
import NewTweet from './NewTweet'
import TweetPage from './TweetPage'
import Nav from './Nav'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    { /* <TweetPage match={{params: {id: '8xf0y6ziyjabvozdd253nd'}}}/> */ }
    return (
      <BrowserRouter>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <Nav />
            {this.props.loading === true
              ? null
              : <div>
                  <Route path='/' exact component={Dashboard} />
                  <Route path='/tweet/:id' component={TweetPage} />
                  <Route path='/new' component={NewTweet} />
                </div>}
          </div>
        </Fragment>
      </BrowserRouter>
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    loading: authedUser === null
  }
}

// connect([mapStateToProps], [mapDispatchToProps], [mergeProps], [options])
export default connect()(App)
