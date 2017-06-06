import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import NumberFormat from 'react-number-format';

import 'react-datepicker/dist/react-datepicker.css';

import Header from './Header';
import Footer from './Footer';
import SwiperForm from './SwiperForm';

const Styles = {
	uploadImage: {
		borderBottom: '1px solid lightgray',
		borderRight: '1px solid lightgray',
		borderTop: '1px solid lightgray',
		borderLeft: '1px solid lightgray',
		padding: 10,
		margin: 15,
		cursor: 'pointer',
	},
};

class LoanApplication extends Component {
	constructor(props) {
		super(props);
		this.state = {
			full_name: '',
			nik: '',
			gender: 'L',
			phone: '',
			birthplace: '',
			birthdate: '',
			datePickerBirthdate: '',
			married_status: 'Belum Kawin',
			wife_husband_name: '',
			children: '',
			education: '',
			earnings: '',
			start_date_job: '',
			datePickerStartJob: '',
			employment: '',
			address: '',
			kec: '',
			city: '',
			kel: '',
			provinsi: '',
			kodepos: '',
			lat: '',
			lng: '',
			ktp: '',
			fileKTP: '',
			ktp_selfie: '',
			fileKTPSelfie: '',
			proof_address: '',
			fileProofAddress: '',
			family_card: '',
			fileFamilyCard: '',
			proof_income1: '',
			fileProofIncome1: '',
			proof_income2: '',
			fileProofIncome2: '',
			proof_income3: '',
			fileProofIncome3: '',
			product: '',
			financeProductID: 0,
			isLogin: false,
			isApplied: false,
			validFullname: true,
			validPhone: true,
			validNIK: true,
			validBirthplace: true,
			validBirthdate: true,
			validMarriedStatus: true,
			validSpouseName: true,
			validChildren: true,
			validLastEducation: true,
			validStartDateJob: true,
			validAddress: true,
			validKelurahan: true,
			validKecamatan: true,
			validCity: true,
			validProvince: true,
			validPostcode: true,
			validFinanceProductID: true,
			isChecked: true,
		};
	}
	componentWillMount() {
		if (JSON.parse(localStorage.userDetail).isLogin) {
			this.setState({
				isLogin: true,
			});
		}
	}
	chooseTenore(event) {
		this.setState({
			financeProductID: event.target.value,
			validFinanceProductID: true,
		});
	}
	setFullname(event) {
		const regexFullname = /[A-Za-z]/g;
		if (event.target.value.length >= 5 && event.target.value.length <= 25 && regexFullname.test(event.target.value)) {
			this.setState({
				full_name: event.target.value,
				validFullname: true
			})
		} else {
			this.setState({
				validFullname: false
			})
		}
	}
	setPhone(event) {
		const regexPhone = /^(^\+62\s?|^0)(\d{3,4}?){2}\d{3,4}$/g;
		if (regexPhone.test(event.target.value)) {
			this.setState({
				phone: event.target.value,
				validPhone : true,
			});
		} else {
			this.setState({
				validPhone: false,
			});
		}
	}
	setNIK(event) {
		const regexNIK = /[0-9]/g;
		if (event.target.value.length >= 10 && regexNIK.test(event.target.value) && event.target.value !== '') {
			this.setState({
				nik: event.target.value,
				validNIK: true
			});
		} else {
			this.setState({
				validNIK: false
			});
		}
	}
	setGender(event) {
		this.setState({
			gender: event.target.value
		})
	}
	setBirthPlace(event) {
		const regexBirthplace = /[A-Za-z]/g;
		if (event.target.value.length >=4 && regexBirthplace.test(event.target.value)) {
			this.setState({
				birthplace: event.target.value,
				validBirthplace: true
			});
		} else {
			this.setState({
				validBirthplace: false
			});
		}
	}
	setBirthday(date) {
		this.setState({
			datePickerBirthdate: date,
		});
		if (new Date().getFullYear() - moment(date).format('YYYY') >= 18) {
			this.setState({
	      birthdate: moment(date).format('DDMMYYYY'),
				validBirthdate: true,
	    });
		} else {
			this.setState({
				validBirthdate: false
			});
		}
	}
	setMarriedStatus(event) {
		const regexMarriedStatus = /[A-Za-z]/g;
		if (regexMarriedStatus.test(event.target.value)) {
			this.setState({
				married_status: event.target.value,
				validMarriedStatus: true,
			});
		} else {
			this.setState({
				validMarriedStatus: false,
			});
		}
	}
	setSpouseName(event) {
		this.setState({
			wife_husband_name: event.target.value,
			validSpouseName: true,
		});
	}
	setChildren(event) {
		if (event.target.value !== 'none') {
			this.setState({
				children: event.target.value,
				validChildren: true,
			});
		} else {
			this.setState({
				validChildren: false,
			});
		}
	}
	setLastEducation(event) {
    if (event.target.value !== 'none') {
      this.setState({
        education: event.target.value,
        validLastEducation: true,
      });
    } else {
      this.setState({
        validLastEducation: false,
      });
    }
	}
	setStartDateJob(date) {
		if (date !== '') {
			this.setState({
				start_date_job: moment(date).format('DDMMYYYY'),
				datePickerStartJob: date,
				validStartDateJob: true,
			});
		} else {
			this.setState({
				validStartDateJob: false,
			});
		}
	}
	setAddress(event) {
		if (event.target.value !== '') {
			this.setState({
				address: event.target.value,
				validAddress: true,
			});
		} else {
			this.setState({
				validAddress: false,
			});
		}
	}
	setKelurahan(event) {
		if (event.target.value !== '') {
			this.setState({
				kel: event.target.value,
				validKelurahan: true,
			});
		} else {
			this.setState({
				validKelurahan: false,
			});
		}
	}
	setKecamatan(event) {
		if (event.target.value !== '') {
			this.setState({
				kec: event.target.value,
				validKecamatan: true,
			});
		} else {
			this.setState({
				validKecamatan: false,
			});
		}
	}
	setCity(event) {
		if (event.target.value !== '') {
			this.setState({
				city: event.target.value,
				validCity: true,
			});
		} else {
			this.setState({
				validCity: false,
			});
		}
	}
	setProvince(event) {
		if (event.target.value !== '') {
			this.setState({
				provinsi: event.target.value,
				validProvince: true,
			})
		} else {
			this.setState({
				validProvince: false
			})
		}
	}
	setPostcode(event) {
		const regexPostcode = /[0-9]/g;
		if (event.target.value !== '' && regexPostcode.test(event.target.value)) {
			this.setState({
				kodepos: event.target.value,
				validPostcode: true,
			});
		} else {
			this.setState({
				validPostcode: false,
			});
		}
	}

	uploadKTPImage(event) {
		event.preventDefault()
		let reader = new FileReader()
		let file = event.target.files[0]

		reader.onloadend = (readerEvent) => {
			let image = new Image()
			image.onload = (imageEvent) => {
				let canvas = document.createElement('canvas')
				let maxSizeWidth = 640
				let maxSizeHeight = 480
				let width = image.width
				let height = image.height

				if (width > height) {
					if (width > maxSizeWidth) {
						height *= maxSizeWidth / width
						width = maxSizeWidth
					}
				} else {
					if (height > maxSizeHeight) {
						width *= maxSizeHeight / height
						height = maxSizeHeight
					}
				}

				canvas.width = width
				canvas.height = height
				canvas.getContext('2d').drawImage(image, 0, 0, width, height)
				let dataUrl = canvas.toDataURL('image/jpeg')
				this.setState({
					ktp: file['name'],
					ktp64: dataUrl
				})
			}
			image.src = readerEvent.target.result
		}
		reader.readAsDataURL(file)
	}
	uploadKTPSelfieImage(event) {
		event.preventDefault()
		let reader = new FileReader()
		let file = event.target.files[0]
		reader.onloadend = (readerEvent) => {
			let image = new Image()
			image.onload = (imageEvent) => {
				let canvas = document.createElement('canvas')
				let maxSizeWidth = 640
				let maxSizeHeight = 480
				let width = image.width
				let height = image.height

				if (width > height) {
					if (width > maxSizeWidth) {
						height *= maxSizeWidth / width
						width = maxSizeWidth
					}
				} else {
					if (height > maxSizeHeight) {
						width *= maxSizeHeight / height
						height = maxSizeHeight
					}
				}

				canvas.width = width
				canvas.height = height
				canvas.getContext('2d').drawImage(image, 0, 0, width, height)
				let dataUrl = canvas.toDataURL('image/jpeg')
				this.setState({
					ktp_selfie: file['name'],
					ktp_selfie64: dataUrl
				})
			}
			image.src = readerEvent.target.result;
		}
		reader.readAsDataURL(file)
	}
	uploadProofAddressImage(event) {
		event.preventDefault()
		let reader = new FileReader()
		let file = event.target.files[0]
		reader.onloadend = () => {
			this.setState({
				proof_address64: reader.result,
				proof_address: file['name']
			})
		}
		reader.readAsDataURL(file)
	}
	uploadFamilyCardImage(event) {
		event.preventDefault();
		let reader = new FileReader();
		let file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				family_card64: reader.result,
				family_card: file['name']
			})
		}
		reader.readAsDataURL(file);
	}
	uploadProofIncome1(event) {
		event.preventDefault();
		let reader = new FileReader();
		let file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				proof_income164: reader.result,
				proof_income1: file['name']
			})
		}
		reader.readAsDataURL(file)
	}
	uploadProofIncome2(event) {
		event.preventDefault()
		let reader = new FileReader()
		let file = event.target.files[0]
		reader.onloadend = () => {
			this.setState({
				proof_income264: reader.result,
				proof_income2: file['name']
			})
		}
		reader.readAsDataURL(file)
	}
	uploadProofIncome3(event) {
		event.preventDefault()
		let reader = new FileReader();
		let file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				proof_income364: reader.result,
				proof_income3: file[name],
			});
		};
		reader.readAsDataURL(file);
	}
	clickLoanApplication(event) {
		event.preventDefault();
		if (this.state.financeProductID !== 0) {
		localStorage.setItem('loanApplication', JSON.stringify(this.state));
		// if (this.state.full_name !== '' && this.state.phone !== '' && this.state.NIK !== '' && this.state.birthdate !== '' && this.state.birthplace !== '' && this.state.address !== '') {
			this.setState({
				isApplied: true,
			});
		} else {
			this.setState({
				isApplied: false,
				validFinanceProductID: false,
			})
		}
		axios.put('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/api/userdetail/',{...this.state, partnership: this.props.userDetail.partnership, lat: 6.1818, lng: 106.8230}, {headers: { Authorization: 'JWT ' + this.props.user.token }})
		.then(result => {
		})
		.catch(error => {
			this.setState({
				loanApplicationErr: error.response.data,
			});
		});
		// } else {
		// 	this.setState({
		// 		isChecked: false,
		// 	});
		// }
	}

	displayErr() {
		return this.state.loanApplicationErr;
		// return Object.keys(this.state.loanApplicationErr).map(key => (
		// 	<li key={key} style={{ color: "red" }}>{this.state.loanApplicationErr[key]}</li>
		// ));
	}
	render() {
		if (this.state.isLogin) {
			if (this.state.isApplied) {
				return <Redirect to="/loan-review" />
			} else {
				return (
					<div>
						<Header />
						<div className="container" style={{ margin: 25 }}>
							<div className="row">
								<div className="col-sm-12 col-md-3 col-md-offset-1 col-lg-2 col-lg-offset-2">
									<div className="panel-top">
										<h4 className="fnt-blue">Your Phone</h4>
									</div>
									<div className="panel-bottom">
										<br />
										<div className="text-center">
											{ this.props.product.length !== 0 ?
												<div>
													{ this.props.product.map((item, index) => {
														return (
															<div key={index}>
																<img src={item.image} alt="" />
																<h4>
																	{item.model}
																	<small>{item.price}</small>
																</h4>
																<div>
																<select style={{ width: '90%' }} onChange={event => this.chooseTenore(event)}>
																{
																	item.finance_option.length !== 0 ?
																	item.finance_option.map((cicilan, idx) => {
																		return (
																			<option key={idx} value={cicilan.id}>
																				<NumberFormat value={Math.ceil((item.price + item.price * cicilan.partnership.interest/100)/cicilan.tenore)} displayType={'text'} prefix={'Rp. '} thousandSeparator={true} /><span>/{cicilan.tenore}Bulan</span>
																			</option>
																		);
																	}) : <option></option>
																}
																</select>
																</div>
															</div>
														);
													})}
													{
														this.state.validFinanceProductID ? <span /> : <span style={{ color: 'red' }}>Anda belum memilih cicilan</span>
													}
												</div>
												: <h4>Please pick product first</h4>}
											<Link className="button primary" to="/phone">
												Choose a Different Phone
											</Link>
										</div>
										<br />
									</div>
									<br />
								</div>
								<div className="col-sm-12 col-md-7 col-lg-6">
									<div className="panel-top">
										<div className="row">
											<div className="col-sm-6 col-md-6 col-lg-6">
												<h4 className="fnt-blue">Your Phone</h4>
											</div>
											<div className="col-sm-6 col-md-6 col-lg-6 text-right">
												<mark className="tertiary fade">Saved!</mark>
											</div>
										</div>
									</div>
									<div className="panel-bottom">
										<SwiperForm
											setFullname={event => this.setFullname(event)}
											validFullname={this.state.validFullname}
											setPhone={event => this.setPhone(event)}
											validPhone={this.state.validPhone}
											setNIK={event => this.setNIK(event)}
											validNIK={this.state.validNIK}
											setBirthPlace={event => this.setBirthPlace(event)}
											validBirthplace={this.state.validBirthplace}
											datePickerBirthdate={this.state.datePickerBirthdate}
											setBirthday={event => this.setBirthday(event)}

											setMarriedStatus={event => this.setMarriedStatus(event)}
											validMarriedStatus={this.state.validMarriedStatus}
											setSpouseName={event => this.setSpouseName(event)}
											validSpouseName={this.state.validSpouseName}
											setChildren={event => this.setChildren(event)}
											validChildren={this.state.validChildren}
											setLastEducation={event => this.setLastEducation(event)}
											validLastEducation={this.state.validLastEducation}
											earnings={this.state.earnings}
											setEarnings={(event, value) => this.setState({ earnings: value })}
											datePickerStartJob={this.state.datePickerStartJob}
											setStartDateJob={event => this.setStartDateJob(event)}
											validStartDateJob={this.state.validStartDateJob}

											setAddress={event => this.setAddress(event)}
											validAddress={this.state.validAddress}
											setKelurahan={event => this.setAddress(event)}
											validKelurahan={this.state.validKelurahan}
											setKecamatan={event => this.setKecamatan(event)}
											validKecamatan={this.state.validKecamatan}
											setCity={event => this.setCity(event)}
											validCity={this.state.validCity}
											setProvince={event => this.setProvince(event)}
											validProvince={this.state.validProvince}
											setPostcode={event => this.setPostcode(event)}
											validPostcode={this.state.validPostcode}

											uploadKTPImage={event => this.uploadKTPImage(event)}
											uploadKTPSelfieImage={event => this.uploadKTPSelfieImage(event)}
											uploadProofAddressImage={event => this.uploadProofAddressImage(event)}
											uploadFamilyCardImage={event => this.uploadFamilyCardImage(event)}
											uploadProofIncome1={event => this.uploadProofIncome1(event)}
											uploadProofIncome2={event => this.uploadProofIncome2(event)}
											uploadProofIncome3={event => this.uploadProofIncome3(event)}
										/>
									</div>
								</div>
							</div>
						</div>
						<Footer />
					</div>
				);
			}
		}
		return <Redirect to="/signup" />;
	}
}

const mapStateToProps = state => ({
	user: state.user,
	userDetail: state.userDetail,
	product: state.product,
	disableSubmitButton: state.loanApp.isLoading,
});

export default connect(mapStateToProps, null)(LoanApplication);
