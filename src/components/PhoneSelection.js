import React, { Component } from 'react';
import VanillaModal from 'vanilla-modal';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NumberFormat from 'react-number-format';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

import { selectPhone, getDataPhone } from '../actions';

class PhoneSelection extends Component {
	constructor() {
		super();
		this.state = {
			isLogin: false,
			phone: '',
			price: '',
			products: '',
			modalProduct: -1,
		};
	}

	componentDidMount() {
		this.modal = new VanillaModal();
		if (this.props.userDetail.partnership) {
			axios.get('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/api/product/3/')
			.then(response => {
				this.setState({ products: response.data });
				this.props.getDataPhone();
			})
			.catch(err => {
				console.log(err);
			});
		} else {
			this.props.getDataPhone();
		}
	}

	// componentWillReceiveProps(nextProps) {
		// if (nextProps.userDetail.partnership) {
		// 	axios.get('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/api/finance-product/' + nextProps.userDetail.partnership + '/')
		// 	.then(response => {
		// 		this.setState({ products: this.props.products });
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});
		// }
	// }

	componentWillUnmount() {
		this.modal.destroy();
	}

	productModals() {
		if (this.state.modalProduct !== -1) {
			const data = this.state.products[this.state.modalProduct];
			return (
				<div>
					<center><img src={data.image} alt="" /></center>
					<center>
						<Link className="button primary" to="/loan-application" onClick={() => this.chooseThisPhone(data)}>
							Buy This Phone
						</Link>
					</center>
					<br />
					<div className="row product-spec-row">
						<div className="col-sm-12 col-md-3 col-lg-3 fnt-grey">
							<b>Brand</b>
						</div>
						<div className="col-sm-12 col-md-9 col-lg-9 fnt-grey">
							<p>{data.brand}</p>
						</div>
					</div>
					<div className="row product-spec-row">
						<div className="col-sm-12 col-md-3 col-lg-3 fnt-grey">
							<b>Model</b>
						</div>
						<div className="col-sm-12 col-md-9 col-lg-9 fnt-grey">
							<p>{data.model}</p>
							<br />
						</div>
					</div>
					<div className="row product-spec-row">
						<div className="col-sm-12 col-md-3 col-lg-3 fnt-grey">
							<b>Deskripsi</b>
						</div>
						<div className="col-sm-12 col-md-9 col-lg-9 fnt-grey">
							<p>{data.desc}</p>
						</div>
					</div>
					<div />
				</div>
			);
		}
		return <p />;
	}
	searchPhone(event) {
		
	}
	chooseThisPhone(data) {
		this.props.selectPhone(data);
	}
	render() {
		return (
			<div>
				<Header />
				<div className="container" style={{ padding: '25px 0' }}>
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
	                  <input type="text" onChange={event => this.searchPhone(event)} />
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
								{this.props.products !== ''
				          ? this.props.products.map((data, index) => {
				            return (
				              <div key={data.id} className="col-sm-12 col-md-6 col-lg-4">
				                <div className="card fluid">
				                  <div className="section text-center">
				                    <img src={data.image} alt={data.model} />
				                    <h4>{data.model}<small><NumberFormat value={data.price} displayType={'text'} prefix={'Rp. '} thousandSeparator={true} /></small></h4>
														<div>
															<ul>
															{
																data.finance_option.length !== 0 ?
																data.finance_option.map((item, index) => {
																	return (
																		<li key={index} style={{ listStyleType: "none" }}><NumberFormat value={Math.ceil((data.price + data.price * item.partnership.interest/100)/item.tenore)} displayType={'text'} prefix={'Rp. '} thousandSeparator={true} style={{ fontSize: 13 }} /><span style={{ fontSize: 13 }}>/{item.tenore} Bln</span></li>
																	)
																}) : <li></li>
															}
															</ul>
														</div>
				                    <a className="button" style={{ width: '80%' }} href="#product-specs" data-modal-open onClick={() => this.setState({ modalProduct: index })}>View Details</a>
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
		);
	}
}

const mapStateToProps = state => ({
	user: state.user,
	userDetail: state.userDetail,
	products: state.product.filteredPhone,
});

const mapDispatchToProps = dispatch => bindActionCreators({ selectPhone, getDataPhone }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PhoneSelection);
