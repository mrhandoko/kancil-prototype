import React, { Component } from 'react'
import VanillaModal from 'vanilla-modal'
import { Link, Redirect } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

class PhoneSelection extends Component {
	constructor () {
		super()
		this.state = {
			products: [],
			isLogin: false
		}
	}
	componentDidMount() {
		this.modal = new VanillaModal()
		if (window.localStorage.length === 1) {
			this.setState({ isLogin: true })
		}
	}
	componentWillUnmount() {
		this.modal.destroy()
	}
	render() {
		if (this.state.isLogin) {
			return <Redirect to="/loan-application" />
		} else {
			return (
				<div>
					<Header />
					<div className="container" style={{ margin: '25px 0' }}>
						<div className="row">
							<div className="col-sm-12 col-md-3 col-md-offset-1 col-lg-2 col-lg-offset-2">
								<div className="text-right">
									<a href="#side-panel" className="button hidden-md hidden-lg primary" data-modal-open>Filters</a>
								</div>
								<div className="hidden-sm" id="side-panel">
									<div className="panel-top">
										<h4 className="fnt-blue">Filters</h4>
									</div>
									<div className="panel-bottom">
										<form className="clean-form">
											<h5>SEARCH</h5>
											<input type="text" />
											<div className="form-spacer" />
											<h5>BRAND</h5>
											<div className="input-group" style={{ paddingLeft: 7 }}>
												<input type="checkbox" id="chk1" tabIndex={0} />
												<label htmlFor="chk1">&nbsp;Samsung</label>
												<br />
												<input type="checkbox" id="chk2" tabIndex={1} />
												<label htmlFor="chk2">&nbsp;Apple</label>
												<br />
												<input type="checkbox" id="chk3" tabIndex={2} />
												<label htmlFor="chk3">&nbsp;Oppo</label>
												<br />
												<input type="checkbox" id="chk4" tabIndex={3} />
												<label htmlFor="chk4">&nbsp;Lenovo</label>
											</div>
											<div className="form-spacer" />
												<h5>Price Range</h5>
												<select>
													<option>0 - 1jt</option>
													<option>1jt - 2jt</option>
													<option>2jt - 3jt</option>
													<option>3jt - 4jt</option>
												</select>
											<div className="form-spacer" />
											<h5>Screen Size</h5>
											<select>
												<option>15cm</option>
												<option>20cm</option>
											</select>
											<br />
										</form>
									</div>
								</div>
							</div>
							<div className="col-sm-12 col-md-7 col-lg-6">
								<div className="row">
									<div className="col-sm-12 col-md-12 col-lg-12">
										<div className="row" style={{ borderBottom: '1px solid #eaeaea' }}>
											<div className="col-sm-6 col-md-6 col-lg-6">
												<div style={{ marginTop: 10 }} className="fnt-sz-s1">
													Showing 12 of 53 Products
												</div>
											</div>
											<div className="text-right col-sm-6 col-md-6 col-lg-6 fnt-sz-s1">
												Sort by:
												<form className="clean-form sort">
													<select>
														<option>ASC</option>
														<option>DESC</option>
													</select>
												</form>
											</div>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="card fluid">
											<div className="section text-center">
												<img src="img/phone1.jpg" alt="" />
												<h4>Samsung Galaxy s8<small>Rp. 3.500.000</small></h4>
												<a className="button" href="#product-specs" data-modal-open>View Details</a>
											</div>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="card fluid">
											<div className="section text-center">
												<img src="img/phone1.jpg" alt="" />
												<h4>Samsung Galaxy s8<small>Rp. 3.500.000</small></h4>
												<a className="button" href="#product-specs" data-modal-open>View Details</a>
											</div>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="card fluid">
											<div className="section text-center">
												<img src="img/phone1.jpg" alt="" />
												<h4>Samsung Galaxy s8<small>Rp. 3.500.000</small></h4>
												<a className="button" href="#product-specs" data-modal-open>View Details</a>
											</div>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="card fluid">
											<div className="section text-center">
												<img src="img/phone1.jpg" alt="" />
												<h4>Samsung Galaxy s8<small>Rp. 3.500.000</small></h4>
												<a className="button" href="#product-specs" data-modal-open>View Details</a>
											</div>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="card fluid">
											<div className="section text-center">
												<img src="img/phone1.jpg" alt="" />
												<h4>Samsung Galaxy s8<small>Rp. 3.500.000</small></h4>
												<a className="button" href="#product-specs" data-modal-open>View Details</a>
											</div>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="card fluid">
											<div className="section text-center">
												<img src="img/phone1.jpg" alt="" />
												<h4>Samsung Galaxy s8<small>Rp. 3.500.000</small></h4>
												<a className="button" href="#product-specs" data-modal-open>View Details</a>
											</div>
										</div>
									</div>
									<div className="col-sm-12 col-md-6 col-lg-4">
										<div className="card fluid">
											<div className="section text-center">
												<img src="img/phone1.jpg" alt="" />
												<h4>Samsung Galaxy s8<small>Rp. 3.500.000</small></h4>
												<a className="button" href="#product-specs" data-modal-open>View Details</a>
											</div>
										</div>
									</div>
									<div>
										{/* Modal container template */}
										<div className="modal">
											<div className="modal-inner">
												<span data-modal-close>×</span>
												<div className="modal-content" />
											</div>
										</div>
										{/* End modal container template */}
										<div id="product-specs">
											<center><img src="img/phone1.jpg" alt="" /></center>
											<br />
											<div className="row product-spec-row">
												<div className="col-sm-12 col-md-3 col-lg-3 fnt-grey">
													<b>Memory</b>
												</div>
												<div className="col-sm-12 col-md-9 col-lg-9 fnt-grey">
													4GB LPDDR4 RAM
												</div>
											</div>
											<div className="row product-spec-row">
												<div className="col-sm-12 col-md-3 col-lg-3 fnt-grey">
													<b>Display</b>
												</div>
												<div className="col-sm-12 col-md-9 col-lg-9 fnt-grey">
													5.0 inches<br />
													FHD AMOLED at 441ppi<br />
													2.5D Corning® Gorilla® Glass 4
												</div>
											</div>
											<div className="row product-spec-row">
												<div className="col-sm-12 col-md-3 col-lg-3 fnt-grey">
													<b>Battery</b>
												</div>
												<div className="col-sm-12 col-md-9 col-lg-9 fnt-grey">
													2,770 mAh battery<br />
													Standby time (LTE): up to 19 days<br />
													Talk time (3g/WCDMA): up to 26 hours<br />
													Internet use time (Wi-Fi): up to 13 hours<br />
													Internet use time (LTE): up to 13 hours<br />
													Video playback: up to 13 hours<br />
													Audio playback (via headset): up to 110 hours<br />
													Fast charging: up to 7 hours of use from only 15 minutes of charging
												</div>
											</div>
											<div>
												<Link className="button primary" to="/signup">Buy This Phone</Link>
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

export default PhoneSelection
