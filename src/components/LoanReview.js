import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';

import { submitLoan } from '../actions'

class LoanReview extends Component {
  constructor() {
    super()
    this.state = {
      isSubmit: false
    }
  }
  submitLoan() {
    this.props.submitLoan(this.props.product.id, this.props.product.product.id, this.props.user)
    this.setState({
      isSubmit: true
    })
  }
  render() {
    if (this.state.isSubmit) {
      return <Redirect to="/status" />
    } else {
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
                    <img src={this.props.product.product.image} alt="product-image" />
                    {
                      this.props.product.product.model
                    }
                    <div className="form-spacer" />
                    <h5 className="fnt-grey">Cicilan/Bulan</h5>
                    {Math.ceil((this.props.product.product.price + (this.props.product.product.price * this.props.product.partnership.interest / 100)) / this.props.product.tenore)} per {this.props.product.unit} for {this.props.product.tenore} MONTH
                    <div className="row" style={{ borderTop: '1px solid #eaeaea', margin: '1rem 0', paddingTop: '1rem' }}>
                      <div className="col-sm-12 col-md-12 col-lg-12">
                        <button className="tertiary input-full" onClick={event => this.submitLoan(event)}>Kirim Aplikasi Pinjaman</button>
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
}

const mapStateToProps = state => ({
  product: state.product,
  user: state.user
})

const mapDispatchToProps = dispatch => (
  bindActionCreators({submitLoan}, dispatch)
)

export default connect(mapStateToProps,mapDispatchToProps)(LoanReview)
