import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class Status extends Component {
  constructor() {
    super()
    this.state = {
      isAccepted: false
    }
  }
  render () {
    return (
      <div>
        <Header />
        {
          this.state.isAccepted ?
          <div className="container bg-status-approved" style={{padding: '25px 0'}}>
            <div className="row">
              <div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-10 col-lg-offset-1 text-center">
                <h3 className="fnt-white">ACOUNT OVERVIEW</h3>
                <br />
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-10 col-lg-offset-1 text-center">
                    <div className="status-box">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 text-left">
                          <h4>STATUS</h4>
                          <h5 style={{marginTop: 10}}>Loan Application Accepted!<small>Your phone is on the way!</small></h5>
                          <h6 style={{marginTop: 10}}>Applied on:<small>May 29, 2017</small></h6>
                          <h6 style={{marginTop: 10}}>Product:<small>Samsung Galaxy S8</small></h6>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text-right">
                          <br />
                          <img src="img/accepted.png" width={150} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> :
          <div className="container bg-status-review" style={{padding: '25px 0'}}>
            <div className="row">
              <div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-10 col-lg-offset-1 text-center">
                <h3 className="fnt-white">ACOUNT OVERVIEW</h3>
                <br />
                <div className="row">
                  <div className="col-sm-12 col-md-12 col-lg-10 col-lg-offset-1 text-center">
                    <div className="status-box">
                      <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6 text-left">
                          <h4>STATUS</h4>
                          <h5 style={{marginTop: 10}}>Loan Application in Review<small>Please check back</small></h5>
                          <h6 style={{marginTop: 10}}>Applied on:<small>May 29, 2017</small></h6>
                          <h6 style={{marginTop: 10}}>Product:<small> Your phone here my friend </small></h6>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-6 text-right">
                          <br />
                          <img src="img/in_review.png" width={150} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
        <Footer />
      </div>
    )
  }
}

export default Status
