/* global children */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

import { setUserDetail, formLoanAction } from '../actions';

import Header from './Header';
import Footer from './Footer';
import PhoneForm from './PhoneForm';
import SwiperForm from './SwiperForm';

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
			address: '',
			kec: '',
			city: '',
			kel: '',
			provinsi: '',
			kodepos: '',
			lat: '',
			lng: '',
			ktp: '',
			ktp64: '',
			ktp_selfie: '',
			ktp_selfie64: '',
			proof_address: '',
			proof_address64: '',
			family_card: '',
			family_card64: '',
			proof_income1: '',
			proof_income164: '',
			proof_income2: '',
			proof_income264: '',
			proof_income3: '',
			proof_income364: '',
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
		if(localStorage.user !== undefined ) {
			this.setState({
				isLogin: JSON.parse(localStorage.user).isLogin,
			})
		}
	}
	setFullname(event) {
		const _this = this;
		const regexFullname = /[A-Za-z]/g;
		if (event.target.value.length >= 5 && event.target.value.length <= 25 && regexFullname.test(event.target.value)) {
			this.setState({
				full_name: event.target.value,
				validFullname: true,
			});
			this.props.formLoanAction(this.state);
		} else {
			this.setState({
				validFullname: false,
			});
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
				validNIK: true,
			});
		} else {
			this.setState({
				validNIK: false,
			});
		}
	}
	setGender(event) {
		this.setState({
			gender: event.target.value,
		});
	}
	setBirthPlace(event) {
		const regexBirthplace = /[A-Za-z]/g;
		if (event.target.value.length >= 4 && regexBirthplace.test(event.target.value)) {
			this.setState({
				birthplace: event.target.value,
				validBirthplace: true,
			});
		} else {
			this.setState({
				validBirthplace: false,
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
				validBirthdate: false,
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
			});
		} else {
			this.setState({
				validProvince: false,
			});
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
	chooseTenore(event) {
		this.setState({
			financeProductID: event.target.value,
			validFinanceProductID: true,
		});
	}
	uploadKTPImage(event) {
		event.preventDefault();
		const reader = new FileReader();
		const file = event.target.files[0];

		reader.onloadend = (readerEvent) => {
			const image = new Image();
			image.onload = imageEvent => {
				const canvas = document.createElement('canvas');
				const maxSizeWidth = 640;
				const maxSizeHeight = 480;
				let width = image.width;
				let height = image.height;

				if (width > height) {
					if (width > maxSizeWidth) {
						height *= maxSizeWidth / width;
						width = maxSizeWidth;
					}
				} else {
					if (height > maxSizeHeight) {
						width *= maxSizeHeight / height;
						height = maxSizeHeight;
					}
				}

				canvas.width = width;
				canvas.height = height;
				canvas.getContext('2d').drawImage(image, 0, 0, width, height);
				const dataUrl = canvas.toDataURL('image/jpeg');
				this.setState({
					ktp: file[name],
					ktp64: dataUrl,
				},
					() => localStorage.setItem('loanApplication', JSON.stringify(Object.assign({}, this.state, { ktp: file[name] }))),
				);
			};
			image.src = readerEvent.target.result;
		};
		reader.readAsDataURL(file);
	}
	uploadKTPSelfieImage(event) {
		event.preventDefault();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = readerEvent => {
			const image = new Image();
			image.onload = imageEvent => {
				const canvas = document.createElement('canvas');
				const maxSizeWidth = 640;
				const maxSizeHeight = 480;
				let width = image.width;
				let height = image.height;

				if (width > height) {
					if (width > maxSizeWidth) {
						height *= maxSizeWidth / width;
						width = maxSizeWidth;
					}
				} else {
					if (height > maxSizeHeight) {
						width *= maxSizeHeight / height;
						height = maxSizeHeight;
					}
				}

				canvas.width = width;
				canvas.height = height;
				canvas.getContext('2d').drawImage(image, 0, 0, width, height);
				const dataUrl = canvas.toDataURL('image/jpeg');
				this.setState({
					ktp_selfie: file[name],
					ktp_selfie64: dataUrl,
				},
					() => localStorage.setItem('loanApplication', JSON.stringify(Object.assign({}, this.state, { ktp_selfie: file[name] }))),
				);
			};
			image.src = readerEvent.target.result;
		};
		reader.readAsDataURL(file);
	}
	uploadProofAddressImage(event) {
		event.preventDefault();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				proof_address: file[name],
				proof_address64: reader.result,
			},
				() => localStorage.setItem('loanApplication', JSON.stringify(Object.assign({}, this.state, { proof_address: file[name] }))),
			);
		};
		reader.readAsDataURL(file);
	}
	uploadFamilyCardImage(event) {
		event.preventDefault();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				family_card: file[name],
				family_card64: reader.result,
			},
				() => localStorage.setItem('loanApplication', JSON.stringify(Object.assign({}, this.state, { family_card: file[name] }))),
			);
		};
		reader.readAsDataURL(file);
	}
	uploadProofIncome1(event) {
		event.preventDefault();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				proof_income1: file[name],
				proof_income164: reader.result,
			},
				() => localStorage.setItem('loanApplication', JSON.stringify(Object.assign({}, this.state, { proof_income1: file[name] }))),
			);
		};
		reader.readAsDataURL(file);
	}
	uploadProofIncome2(event) {
		event.preventDefault();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				proof_income2: file[name],
				proof_income264: reader.result,
			},
				() => localStorage.setItem('loanApplication', JSON.stringify(Object.assign({}, this.state, { proof_income2: file[name] }))),
			);
		};
		reader.readAsDataURL(file);
	}
	uploadProofIncome3(event) {
		event.preventDefault();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				proof_income3: file[name],
				proof_income364: reader.result,
			});
		};
		reader.readAsDataURL(file);
	}
	clickLoanApplication(event) {
		event.preventDefault();
		if (this.state.financeProductID !== 0) {
			this.setState({
				isChecked: true,
			});
			localStorage.setItem('loanApplication', JSON.stringify(this.state));
			if (this.state.full_name !== '' && this.state.phone !== '' && this.state.NIK !== '' && this.state.birthdate !== '' && this.state.birthplace !== '' && this.state.address !== '' && this.state.wife_husband_name !== '' && this.state.children !== '' && this.state.education !== '' && this.state.earnings !== '' && this.state.start_date_job !== '' && this.state.provinsi !== '' && this.state.kel !== '' && this.state.kec !== '' && this.state.city !== '' && this.state.ktp !== '' && this.state.ktp64 !== '' && this.state.ktp_selfie !== '' && this.state.ktp_selfie64 !== '' && this.state.proof_address !== '' && this.state.proof_address64 !== '' && this.state.proof_income1 !== '' && this.state.proof_income164 && this.state.proof_income2 !== '' && this.state.proof_income264 !== '' && this.state.proof_income3 !== '' && this.state.proof_income364 !== '') {
				axios.put('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/api/userdetail/', { ...this.state, partnership: this.props.userDetail.partnership, lat: 6.1818, lng: 106.8230 }, { headers: { Authorization: 'JWT ' + JSON.parse(localStorage.user
				).token } })
				.then(result => {
					this.props.setUserDetail(result.data);
				})
				.catch(error => {
					this.setState({
						loanApplicationErr: error.response.data,
					});
				});
				this.setState({
					isApplied: true,
					isChecked: true,
				});
			} else {
				this.setState({
					isApplied: false,
					isChecked: false,
				});
			}
		} else {
			this.setState({
				isChecked: false,
				validFinanceProductID: false,
			});
		}
	}
	render() {
		if (this.props.user.isLogin || this.state.isLogin) {
			if (this.state.isApplied) {
				return <Redirect to="/loan-review" />;
			}
			if(JSON.parse(localStorage.user).isLogin) {
				return (
					<div>
						<Header />
						<div className="container" style={{ margin: 25 }}>
							<div className="row">
								<PhoneForm
									product={this.props.product}
									chooseTenore={event => this.chooseTenore(event)}
									financeProductID={this.state.financeProductID}
									validFinanceProductID={this.state.validFinanceProductID}
									phoneLink={'/phone'}
								/>
								<SwiperForm
									full_name={this.props.formLoan.full_name}
									nik={this.state.nik}
									gender={this.state.gender}
									phone={this.state.phone}
									birthplace={this.state.birthplace}
									birthdate={this.state.birthdate}
									married_status={this.state.married_status}
									wife_husband_name={this.state.wife_husband_name}
									children={this.state.children}
									education={this.state.education}
									earnings={this.state.earnings}
									start_date_job={this.state.start_date_job}
									address={this.state.address}
									kec={this.state.kec}
									city={this.state.city}
									kel={this.state.kel}
									provinsi={this.state.provinsi}
									kodepos={this.state.kodepos}
									ktp={this.state.ktp}
									ktp_selfie={this.state.ktp_selfie}
									proof_address={this.state.proof_address}
									family_card={this.state.family_card}
									proof_income1={this.state.proof_income1}
									proof_income2={this.state.proof_income2}
									proof_income3={this.state.proof_income3}

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
									validBirthdate={this.state.validBirthdate}

									setMarriedStatus={event => this.setMarriedStatus(event)}
									validMarriedStatus={this.state.validMarriedStatus}
									setSpouseName={event => this.setSpouseName(event)}
									validSpouseName={this.state.validSpouseName}
									setChildren={event => this.setChildren(event)}
									validChildren={this.state.validChildren}
									setLastEducation={event => this.setLastEducation(event)}
									validLastEducation={this.state.validLastEducation}
									setEarnings={(event, value) => this.setState({ earnings: value })}
									datePickerStartJob={this.state.datePickerStartJob}
									setStartDateJob={event => this.setStartDateJob(event)}
									validStartDateJob={this.state.validStartDateJob}

									setAddress={event => this.setAddress(event)}
									validAddress={this.state.validAddress}
									setKelurahan={event => this.setKelurahan(event)}
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

									disableSubmitButton={this.props.disableSubmitButton}
									clickLoanApplication={event => this.clickLoanApplication(event)}
									isChecked={this.state.isChecked}
									validFinanceProductID={this.state.validFinanceProductID}
								/>
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
	product: state.product.selectedPhone,
	disableSubmitButton: state.loanApp.isLoading,
	formLoan: state.formLoan.persistedState,
});

const mapDispatchToProps = dispatch => bindActionCreators({ setUserDetail, formLoanAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoanApplication);
