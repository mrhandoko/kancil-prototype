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
			this.state = this.props.formLoan;
		}
	}
	setFullname(event) {
		event.persist();
		const regexFullname = /[A-Za-z]/g;
		if (event.target.value.length >= 5 && event.target.value.length <= 25 && regexFullname.test(event.target.value)) {
			this.setState({
				full_name: event.target.value,
				validFullname: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				full_name: event.target.value,
				validFullname: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setPhone(event) {
		event.persist();
		const regexPhone = /^(^\+62\s?|^0)(\d{3,4}?){2}\d{3,4}$/g;
		if (regexPhone.test(event.target.value)) {
			this.setState({
				phone: event.target.value,
				validPhone : true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				phone: event.target.value,
				validPhone: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setNIK(event) {
		event.persist();
		const regexNIK = /[0-9]/g;
		if (event.target.value.length >= 10 && regexNIK.test(event.target.value) && event.target.value !== '') {
			this.setState({
				nik: event.target.value,
				validNIK: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				validNIK: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setGender(event) {
		event.persist();
		this.setState({
			gender: event.target.value,
		},
			() => this.props.formLoanAction(this.state),
		);
	}
	setBirthPlace(event) {
		event.persist();
		const regexBirthplace = /[A-Za-z]/g;
		if (event.target.value.length >= 4 && regexBirthplace.test(event.target.value)) {
			this.setState({
				birthplace: event.target.value,
				validBirthplace: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				birthplace: event.target.value,
				validBirthplace: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setBirthday(date) {
		event.persist();
		this.setState({
			datePickerBirthdate: date,
		});
		if (new Date().getFullYear() - moment(date).format('YYYY') >= 18) {
			this.setState({
				birthdate: moment(date).format('DDMMYYYY'),
				validBirthdate: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				birthdate: moment(date).format('DDMMYYYY'),
				validBirthdate: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setMarriedStatus(event) {
		event.persist();
		const regexMarriedStatus = /[A-Za-z]/g;
		if (regexMarriedStatus.test(event.target.value)) {
			this.setState({
				married_status: event.target.value,
				validMarriedStatus: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				married_status: event.target.value,
				validMarriedStatus: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setSpouseName(event) {
		event.persist();
		this.setState({
			wife_husband_name: event.target.value,
			validSpouseName: true,
		},
			() => this.props.formLoanAction(this.state),
		);
	}
	setChildren(event) {
		event.persist();
		if (event.target.value !== 'none') {
			this.setState({
				children: event.target.value,
				validChildren: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				children: event.target.value,
				validChildren: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setLastEducation(event) {
		event.persist();
		if (event.target.value !== 'none') {
			this.setState({
				education: event.target.value,
				validLastEducation: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				education: event.target.value,
				validLastEducation: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setStartDateJob(date) {
		date.persist();
		if (date !== '') {
			this.setState({
				start_date_job: moment(date).format('DDMMYYYY'),
				datePickerStartJob: date,
				validStartDateJob: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				start_date_job: moment(date).format('DDMMYYYY'),
				datePickerStartJob: date,
				validStartDateJob: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setAddress(event) {
		event.persist();
		if (event.target.value !== '') {
			this.setState({
				address: event.target.value,
				validAddress: true,
			});
		} else {
			this.setState({
				address: event.target.value,
				validAddress: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setKelurahan(event) {
		event.persist();
		if (event.target.value !== '') {
			this.setState({
				kel: event.target.value,
				validKelurahan: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				kel: event.target.value,
				validKelurahan: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setKecamatan(event) {
		event.persist();
		if (event.target.value !== '') {
			this.setState({
				kec: event.target.value,
				validKecamatan: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				kec: event.target.value,
				validKecamatan: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setCity(event) {
		event.persist();
		if (event.target.value !== '') {
			this.setState({
				city: event.target.value,
				validCity: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				city: event.target.value,
				validCity: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setProvince(event) {
		event.persist();
		if (event.target.value !== '') {
			this.setState({
				provinsi: event.target.value,
				validProvince: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				provinsi: event.target.value,
				validProvince: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	setPostcode(event) {
		event.persist();
		const regexPostcode = /[0-9]/g;
		if (event.target.value !== '' && regexPostcode.test(event.target.value)) {
			this.setState({
				kodepos: event.target.value,
				validPostcode: true,
			},
				() => this.props.formLoanAction(this.state),
			);
		} else {
			this.setState({
				kodepos: event.target.value,
				validPostcode: false,
			},
				() => this.props.formLoanAction(this.state),
			);
		}
	}
	chooseTenore(event) {
		event.persist();
		this.setState({
			financeProductID: event.target.value,
			validFinanceProductID: true,
		},
			() => this.props.formLoanAction(this.state),
		);
	}
	uploadKTPImage(event) {
		event.preventDefault();
		event.persist();
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
					ktp: file['name'],
					ktp64: dataUrl,
				},
					() => localStorage.setItem('loanApplication', JSON.stringify(Object.assign({}, this.state, { ktp: file['name'] }))),
				);
			};
			image.src = readerEvent.target.result;
		};
		reader.readAsDataURL(file);
	}
	uploadKTPSelfieImage(event) {
		event.preventDefault();
		event.persist();
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
					ktp_selfie: file['name'],
					ktp_selfie64: dataUrl,
				}
				,
					() => {
						localStorage.setItem('loanApplication', JSON.stringify(Object.assign({}, this.state, { ktp_selfie: file['name'] })))
					},
				);
			};
			image.src = readerEvent.target.result;
		};
		reader.readAsDataURL(file);
	}
	uploadProofAddressImage(event) {
		event.preventDefault();
		event.persist();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				proof_address: file['name'],
				proof_address64: reader.result,
			},
				() => localStorage.setItem('loanApplication', JSON.stringify(Object.assign({}, this.state, { proof_address: file['name'] }))),
			);
		};
		reader.readAsDataURL(file);
	}
	uploadFamilyCardImage(event) {
		event.preventDefault();
		event.persist();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				family_card: file['name'],
				family_card64: reader.result,
			},
				() => localStorage.setItem('loanApplication', JSON.stringify(Object.assign({}, this.state, { family_card: file['name'] }))),
			);
		};
		reader.readAsDataURL(file);
	}
	uploadProofIncome1(event) {
		event.preventDefault();
		event.persist();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				proof_income1: file['name'],
				proof_income164: reader.result,
			},
				() => localStorage.setItem('loanApplication', JSON.stringify(Object.assign({}, this.state, { proof_income1: file['name'] }))),
			);
		};
		reader.readAsDataURL(file);
	}
	uploadProofIncome2(event) {
		event.preventDefault();
		event.persist();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				proof_income2: file['name'],
				proof_income264: reader.result,
			},
				() => localStorage.setItem('loanApplication', JSON.stringify(Object.assign({}, this.state, { proof_income2: file['name'] }))),
			);
		};
		reader.readAsDataURL(file);
	}
	uploadProofIncome3(event) {
		event.preventDefault();
		event.persist();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				proof_income3: file['name'],
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
									nik={this.props.formLoan.nik}
									gender={this.props.formLoan.gender}
									phone={this.props.formLoan.phone}
									birthplace={this.props.formLoan.birthplace}
									birthdate={this.props.formLoan.birthdate}
									married_status={this.props.formLoan.married_status}
									wife_husband_name={this.props.formLoan.wife_husband_name}
									children={this.props.formLoan.children}
									education={this.props.formLoan.education}
									earnings={this.props.formLoan.earnings}
									start_date_job={this.props.formLoan.start_date_job}
									address={this.props.formLoan.address}
									kec={this.props.formLoan.kec}
									city={this.props.formLoan.city}
									kel={this.props.formLoan.kel}
									provinsi={this.props.formLoan.provinsi}
									kodepos={this.props.formLoan.kodepos}
									ktp={this.props.formLoan.ktp}
									ktp_selfie={this.props.formLoan.ktp_selfie}
									proof_address={this.props.formLoan.proof_address}
									family_card={this.props.formLoan.family_card}
									proof_income1={this.props.formLoan.proof_income1}
									proof_income2={this.props.formLoan.proof_income2}
									proof_income3={this.props.formLoan.proof_income3}

									setFullname={event => this.setFullname(event)}
									validFullname={this.state.validFullname}
									setPhone={event => this.setPhone(event)}
									validPhone={this.state.validPhone}
									setGender={event => this.setGender(event)}
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
	formLoan: state.formLoan,
});

const mapDispatchToProps = dispatch => bindActionCreators({ setUserDetail, formLoanAction }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(LoanApplication);
