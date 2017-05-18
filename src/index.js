import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import store from './store'
import Home from './components/Home'
import PhoneSelection from './components/PhoneSelection'
import Login from './components/Login'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/phone-selection' component={PhoneSelection} />
        <Route path='/login' component={Login} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
