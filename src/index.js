import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import store from './store'
import Home from './components/Home'
import PhoneSelection from './components/PhoneSelection'
import Login from './components/Login'
import SignUp from './components/SignUp'
import LoanCheckout from './components/LoanCheckout'
import LoanApplication from './components/LoanApplication'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/phone-selection' component={PhoneSelection} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={SignUp} />
        <Route path='/loan-checkout' component={LoanCheckout} />
        <Route path='/loan-application' component={LoanApplication} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
