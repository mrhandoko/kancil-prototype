import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';

import { submitLoan } from '../actions'

class LoanReview extends Component {
  componentDidMount() {
    console.log(JSON.stringify(this.props.product));
  }
  render() {
    return (
      <div>
        <Header />
        <div className="container" style={{ margin: '25px 0' }}>
          <div className="row">
            <div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
              <div className="panel-top">
                <h4 className="fnt-blue">Loan Review</h4>
              </div>
              <div className="panel-bottom">
                <div className="clean-form">
                  <h5 className="fnt-grey">Produk</h5>
                  <div className="form-spacer" />
                  <h5 className="fnt-grey">Cicilan/Bulan</h5>
                  <div className="row" style={{ borderTop: '1px solid #eaeaea', margin: '1rem 0', paddingTop: '1rem' }}>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <button className="tertiary input-full" onClick={event => this.clickLogin(event)}>Kirim Aplikasi Pinjaman</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  product: state.product,
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({submitLoan}, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(LoanReview)
