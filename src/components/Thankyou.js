import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Thankyou = () => (
  <div>
  <Header />
  <div className="container" style={{margin: '25px 0'}}>
    <div className="row">
      <div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-6 col-lg-offset-3">
        <div className="panel-top">
          <h4 className="fnt-blue">Application Confirmation</h4>
        </div>
        <div className="panel-bottom bg-thank-you">
          <div className="row" style={{padding: '1rem', height: '50vh'}}>
            <div className="col-sm-12 col-md-12 col-lg-12 text-center">
              <h2 className="fnt-light-blue">Terima Kasih!</h2>
              You application has been received. We will call you soon.
              <br />
              <Link className="button primary" to="/">Back to Homepage</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
  </div>
)

export default Thankyou
