import React, { Component } from 'react'
import VanillaModal from 'vanilla-modal'
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import axios from 'axios'
import NumberFormat from 'react-number-format';

import Header from './Header'
import Footer from './Footer'

import { selectPhone } from '../actions'

class PhoneSelection extends Component {
	constructor() {
		super()
		this.state = {
			isLogin: false,
			phone: '',
			price: '',
			products: '',
			modalProduct: -1
		}
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.userDetail.partnership)
			axios.get('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/api/finance-product/' + nextProps.userDetail.partnership + '/')
			.then(response => {
				console.log(response.data);
				this.setState({ products: response.data })
			})
			.catch(err => {
				console.log(err);
			})
	}

	componentDidMount() {
		this.modal = new VanillaModal()
		if (window.localStorage.length === 1) {
			this.setState({ isLogin: true })
		}

		if (this.props.userDetail.partnership) {
			axios.get('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/api/finance-product/' + this.props.userDetail.partnership + '/')
			.then(response => {
				console.log('enfjwe', response.data);
				this.setState({ products: response.data })
			})
			.catch(err => {
				console.log(err);
			})
		}
		else {
			axios.get('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/api/finance-product/3/')
			.then(response => {
				this.setState({ products: response.data })
			})
			.catch(err => {
				console.log(err)
			})
		}
	}

	componentWillUnmount() {
		this.modal.destroy()
	}

	productModals() {
		if (this.state.modalProduct !== -1) {
			let data = this.state.products[this.state.modalProduct]
			console.log('product modals', this.state.modalProduct)
			console.log('phone data', data.product)
			return (
				<div>
					<center><img src={data.product.image} alt="" /></center>
					<center>
						<Link
							className="button primary"
							to="/loan-application"
							onClick={() => this.chooseThisPhone(data)}
						>
							Buy This Phone
						</Link>
					</center>
					<br />
					<div className="row product-spec-row">
						<div className="col-sm-12 col-md-3 col-lg-3 fnt-grey">
							<b>Brand</b>
						</div>
						<div className="col-sm-12 col-md-9 col-lg-9 fnt-grey">
							<p>{data.product.brand}</p>
						</div>
					</div>
					<div className="row product-spec-row">
						<div className="col-sm-12 col-md-3 col-lg-3 fnt-grey">
							<b>Model</b>
						</div>
						<div className="col-sm-12 col-md-9 col-lg-9 fnt-grey">
							<p>{data.product.model}</p>
							<br />
						</div>
					</div>
					<div className="row product-spec-row">
						<div className="col-sm-12 col-md-3 col-lg-3 fnt-grey">
							<b>Deskripsi</b>
						</div>
						<div className="col-sm-12 col-md-9 col-lg-9 fnt-grey">
							<p>{data.product.desc}</p>
						</div>
					</div>
					<div />
				</div>
			)
		}
		return <p></p>
	}

	chooseThisPhone(data) {
		console.log(data)
		this.props.selectPhone(data)
	}
	render() {
		return (
			<div>
				<Header />
				<div className="container" style={{padding: '25px 0'}}>
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
	                  <div className="input-group">
	                    <input type="checkbox" id="chk1" tabIndex={0} /> <label htmlFor="chk1">&nbsp;Samsung</label>
	                    <br />
	                    <input type="checkbox" id="chk2" tabIndex={1} /> <label htmlFor="chk2">&nbsp;Apple</label>
	                    <br />
	                    <input type="checkbox" id="chk3" tabIndex={2} /> <label htmlFor="chk3">&nbsp;Oppo</label>
	                    <br />
	                    <input type="checkbox" id="chk4" tabIndex={3} /> <label htmlFor="chk4">&nbsp;Lenovo</label>
	                  </div>
	                  <div className="form-spacer" />
	                  {/* <h5>Price Range</h5>
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
	                  <br /> */}
	                </form>
	              </div>
	            </div>
	          </div>
	          <div className="col-sm-12 col-md-7 col-lg-6">
	            <div className="row">
	              {/* <div className="col-sm-12 col-md-12 col-lg-12">
	                <div className="row" style={{borderBottom: '1px solid #eaeaea'}}>
	                  <div className="col-sm-6 col-md-6 col-lg-6">
	                    <div style={{marginTop: 10}} className="fnt-sz-s1">Showing 12 of 53 Products</div>
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
	              </div> */}
								{this.state.products !== ''
				          ? this.state.products.map((data, index) => {
				            return (
				              <div key={data.id} className="col-sm-12 col-md-6 col-lg-4">
				                <div className="card fluid">
				                  <div className="section text-center">
				                    <img src={data.product.image} alt={data.product.model} />
				                    <h4>{data.product.model}<small><NumberFormat value={data.product.price} displayType={'text'} prefix={'Rp. '} thousandSeparator={true} /></small></h4>
														<div>
															<small><NumberFormat value={Math.ceil((data.product.price + (data.product.price * data.partnership.interest / 100))/data.tenore)} displayType={'text'} prefix={'Rp. '} thousandSeparator={true} style={{ fontSize: 12 }} />
				                    	{/* per {data.unit} untuk  */}
															/{data.tenore} Bulan</small>
														</div>
				                    <a className="button" href="#product-specs" data-modal-open onClick={() => this.setState({ modalProduct: index })}>View Details</a>
				                  </div>
				                </div>
				              </div>
				            )
				          })
				          : <center><div><i className="spin extra-large"></i></div></center>
				        }
								{/* Modal container template */}
			          <div className="modal">
			            <div className="modal-inner">
			              <span data-modal-close>×</span>
			              <div className="modal-content" />
			            </div>
			          </div>
			        </div>
			        {/* End modal container template */}
							<div id="product-specs">
			          {this.productModals()}
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
	user: state.user,
	userDetail: state.userDetail
})

const mapDispatchToProps = dispatch =>
	bindActionCreators({ selectPhone }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(PhoneSelection)
