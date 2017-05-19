import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import store from './store'
import Home from './components/Home'
import PhoneSelection from './components/PhoneSelection'
import Login from './components/Login'
import LoanApplication from './components/LoanApplication'
import SignUp from './components/SignUp'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/phone' component={PhoneSelection} />
        <Route path='/login' component={Login} />
        <Route path='/daftar' component={SignUp} />
        <Route path='/load-application' component={LoanApplication} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
