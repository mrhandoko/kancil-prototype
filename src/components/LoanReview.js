import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';

import Header from './Header';
import Footer from './Footer';

import { submitLoan } from '../actions';

class LoanReview extends Component {
	constructor() {
		super();
		this.state = {
			financeID: 0,
			tenore: 0,
			payment: 0,
			isSubmit: false,
		};
	}
	componentWillMount() {
		if (this.props.product.length !== 0) {
			localStorage.setItem('loanReview', JSON.stringify(this.props.product));
		}
		const tenoreID = JSON.parse(localStorage.loanApplication).financeProductID;
		const price = JSON.parse(localStorage.loanReview).selectedPhone[0].price;
		const finance = JSON.parse(localStorage.loanReview).selectedPhone[0].finance_option;
		const financeOption = finance.map(data => data.id);
		const financeOptionID = financeOption.indexOf(parseInt(tenoreID));
		this.setState({
			financeID: financeOption[financeOptionID],
			payment: Math.ceil((price + price * finance[financeOptionID].partnership.interest/100)/finance[financeOptionID].tenore),
			tenore: finance[financeOptionID].tenore,
		});
	}
	submitLoan() {
		this.props.submitLoan(
			this.state.financeID,
			JSON.parse(localStorage.loanReview).selectedPhone[0].id,
			this.props.user,
		);
		this.setState({
			isSubmit: true,
		});
	}
	render() {
		if (this.state.isSubmit) {
			return <Redirect to="/thankyou" />
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
										<center>
										<h5 className="fnt-grey">Produk</h5>
											{
												JSON.parse(localStorage.loanReview).selectedPhone.length !== 0 ?
												<div>
								        <img src={JSON.parse(localStorage.loanReview).selectedPhone[0].image} alt="" />
								        <div>{JSON.parse(localStorage.loanReview).selectedPhone[0].model}</div>
								        <div className="form-spacer" />
								        <h5 className="fnt-grey">Cicilan/Bulan</h5>
								        <NumberFormat value={this.state.payment} displayType={'text'} prefix={'Rp. '} thousandSeparator={true} /><span> x {this.state.tenore} Bulan</span>
												</div> : <div></div>
											}
										</center>
										<div className="row" style={{ borderTop: '1px solid #eaeaea', margin: '1rem 0', paddingTop: '1rem' }}>
											<div className="col-sm-12 col-md-12 col-lg-12">
												<button className="tertiary input-full" onClick={event => this.submitLoan(event)}>
													Kirim Aplikasi Pinjaman
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			);
		}
	}
}

const mapStateToProps = state => ({
	product: state.product,
	user: state.user,
});

const mapDispatchToProps = dispatch => bindActionCreators({ submitLoan }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoanReview);
