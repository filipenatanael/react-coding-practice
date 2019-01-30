import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>
, document.getElementById('root'))
