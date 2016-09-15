import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import reducers from './reducers/index'
import routes from './routes'
import Immutable from 'immutable'

const initialState = {
  stories: Immutable.List([{
    id: '0',
    name: 'Create a TODO list',
    description: 'Wow',
    points: 5,
    avatar: 'http://semantic-ui.com/images/avatar/large/steve.jpg',
    owner: 'Steve Jobs',
  }]),

  ui: Immutable.Map({
    isCreating: false
  })
}
const rootReducer = combineReducers(reducers)
const store = createStore(rootReducer, initialState)
const history = syncHistoryWithStore(browserHistory, store)

store.subscribe(() =>
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    document.getElementById('root')
  )
)

store.dispatch({ type: 'INITIALIZE' })
