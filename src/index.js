import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store';
import Home from './components/Home';
import PhoneSelection from './components/PhoneSelection';
import Login from './components/Login';
import LoanApplication from './components/LoanApplication';
import SignUp from './components/SignUp';
import Thankyou from './components/Thankyou';
import FAQ from './components/FAQ';
import UberHome1 from './components/uber/UberHome1';
import UberHome2 from './components/uber/UberHome2';
import UberHome3 from './components/uber/UberHome3';
import UberHome4 from './components/uber/UberHome4';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/phone" component={PhoneSelection} />
        <Route path="/login" component={Login} />
        <Route path="/loan-application" component={LoanApplication} />
        <Route path="/signup" component={SignUp} />
        <Route path="/thankyou" component={Thankyou} />
        <Route path="/faq" component={FAQ} />
        <Route path="/uber1" component={UberHome1} />
        <Route path="/uber2" component={UberHome2} />
        <Route path="/uber3" component={UberHome3} />
        <Route path="/uber4" component={UberHome4} />
      </div>
    </Router>
  </Provider>,
document.getElementById('root'),
);
