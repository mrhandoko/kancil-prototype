import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Home from './components/Home';
import PhoneSelection from './components/PhoneSelection';
import Login from './components/Login';
import LoanApplication from './components/LoanApplication';
import SignUp from './components/SignUp';
import Thankyou from './components/Thankyou';
import Status from './components/Status';
import FAQ from './components/FAQ';
import UberHome1 from './components/uber/UberHome1';
import UberHome2 from './components/uber/UberHome2';
import UberHome3 from './components/uber/UberHome3';
import UberHome4 from './components/uber/UberHome4';
import { setUserData, getUserDetail } from './actions'

class App extends React.Component {
  componentDidMount () {
    let user = JSON.parse(window.localStorage.getItem('userDetail'))
    if (user != null && user.token != null) {
      this.props.setUserData(user)
      this.props.getUserDetail(user)
    }
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/phone" component={PhoneSelection} />
          <Route path="/login" component={Login} />
          <Route path="/loan-application" component={LoanApplication} />
          <Route path="/signup" component={SignUp} />
          <Route path="/thankyou" component={Thankyou} />
          <Route path="/status" component={Status} />
          <Route path="/faq" component={FAQ} />
          <Route path="/uber1" component={UberHome1} />
          <Route path="/uber2" component={UberHome2} />
          <Route path="/uber3" component={UberHome3} />
          <Route path="/uber4" component={UberHome4} />
        </div>
      </Router>
    )
  }
}

const mapDispatchToProps = dispatch => (
  bindActionCreators({ setUserData, getUserDetail }, dispatch)
)

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
