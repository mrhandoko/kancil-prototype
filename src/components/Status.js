import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import { getLoanData } from '../actions'

class Status extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isAccepted: false,
			listLoan: ''
		}
	}
	// componentDidMount() {
	//
	// }
	// componentDidUpdate (prevProps, prevState) {
	//   if (this.props.loan && !prevState.loan) {
	//     console.log(this.props.loan);
	//     this.setState({
	//       listLoan: this.props.loan
	//     })
	//   }
	// }
	componentWillReceiveProps(nextProps) {
		if (!this.props.user.isLogin && nextProps.user.isLogin) {
			this.props.getLoanData(nextProps.user)
		}
		if (nextProps.loan) {
			this.setState({
				listLoan: nextProps.loan
			})
			console.log('list loan', this.state.listLoan)
		}
	}

	render() {
		return (
			<div>
				<Header />
				{this.state.isAccepted
					? <div
							className="container bg-status-approved"
							style={{ padding: '25px 0' }}
						>
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
														<h4 style={{ marginTop: 10 }}>
															Loan Application Accepted!
															<small>Your phone is on the way!</small>
														</h4>
														<h5 style={{ marginTop: 10 }}>
															Applied on:<small>May 29, 2017</small>
														</h5>
														<h5 style={{ marginTop: 10 }}>
															Product:<small>Samsung Galaxy S8</small>
														</h5>
													</div>
													<div className="col-sm-12 col-md-6 col-lg-6 text-right">
														<br />
														<img src="img/accepted.png" width={150} alt="" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					: this.state.listLoan.length !== 0
							? <div>
									{this.state.listLoan.map((item, index) => {
										return (
											<div
												key={index}
												className="container bg-status-review"
												style={{ padding: '25px 0' }}
											>
												<div className="row">
													<div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-10 col-lg-offset-1 text-center">
														<h3 className="fnt-white">ACCOUNT OVERVIEW</h3>
														<br />
														<div className="row">
															<div className="col-sm-12 col-md-12 col-lg-10 col-lg-offset-1 text-center">
																<div className="status-box">
																	<div className="row">
																		<div className="col-sm-12 col-md-6 col-lg-6 text-left">
																			<h4>STATUS</h4>
																			<h4 style={{ marginTop: 10 }}>
																				Loan Application in Review
																				<small>Please check back</small>
																			</h4>
																			<h5 style={{ marginTop: 10 }}>
																				Applied on:
																				<small>{item.created_at}</small>
																			</h5>
																			<h5 style={{ marginTop: 10 }}>
																				Status:<small>{item.status}</small>
																			</h5>
																		</div>
																		<div className="col-sm-12 col-md-6 col-lg-6 text-right">
																			<br />
																			<img
																				src="img/in_review.png"
																				width={150}
																				alt=""
																			/>
																		</div>
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										)
									})}
								</div>
							: // <div>{ this.state.listLoan.map((item,index) => {
								//   return (
								//   )
								// }) }</div>
								<p>Fetching data</p>}
				<Footer />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	loan: state.loanApp,
	user: state.user
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({ getLoanData }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(Status)
