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
			financeProductID: 33,
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
			validProvinsi: true,
			validKodepos: true,
			isChecked: true,
		};
	}
	chooseTenore(event) {
		this.setState({
			financeProductID: event.target.value,
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
				validPhone : true
			});
		} else {
			this.setState({
				validPhone: false
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
				validProvinsi: true,
			})
		} else {
			this.setState({
				validProvinsi: false
			})
		}
	}
	setPostcode(event) {
		const regexPostcode = /[0-9]/g;
		if (event.target.value !== '' && regexPostcode.test(event.target.value)) {
			this.setState({
				kodepos: event.target.value,
				validKodepos: true,
			});
		} else {
			this.setState({
				validKodepos: false,
			});
		}
	}
	componentWillMount() {
		if (window.localStorage.getItem('userDetail') !== null) {
			if (window.localStorage.length !== 0) {
				this.setState({
					isLogin: true,
				});
			}
		}
	}

	uploadKTPImage(event) {
		event.preventDefault();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				ktp: file[name],
				ktp64: reader.result,
			});
		};
		reader.readAsDataURL(file);
	}
	uploadKTPSelfieImage(event) {
		event.preventDefault();
		const reader = new FileReader();
		const file = event.target.files[0];
		reader.onloadend = () => {
			this.setState({
				ktp_selfie64: reader.result,
				ktp_selfie: file[name]
			})
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
		event.preventDefault()
		let reader = new FileReader()
		let file = event.target.files[0]
		reader.onloadend = () => {
			this.setState({
				family_card64: reader.result,
				family_card: file['name']
			})
		}
		reader.readAsDataURL(file);
	}
	uploadProofIncome1(event) {
		event.preventDefault()
		let reader = new FileReader()
		let file = event.target.files[0]
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
		let reader = new FileReader()
		let file = event.target.files[0]
		reader.onloadend = () => {
			this.setState({
				proof_income364: reader.result,
				proof_income3: file[name],
			})
		};
		reader.readAsDataURL(file);
	}
	clickLoanApplication(event) {
		event.preventDefault();
		localStorage.setItem('loanApplication', JSON.stringify(this.state));
		// if (this.state.full_name !== '' && this.state.phone !== '' && this.state.NIK !== '' && this.state.birthdate !== '' && this.state.birthplace !== '' && this.state.address !== '') {
			this.setState({
				isApplied: true
			});
			axios.put('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/api/userdetail/',{...this.state, partnership: this.props.userDetail.partnership, lat: 6.1818, lng: 106.8230}, {headers: { Authorization: 'JWT ' + this.props.user.token }})
			.then(result => {
				this.setState({ isApplied: true })
			})
			.catch(error => {
				console.log(error);
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
																	item.finance_option.map((cicilan, index) => {
																		return (
																			<option key={index} value={cicilan.id}>
																				<NumberFormat value={Math.ceil(item.price/cicilan.tenore)} displayType={'text'} prefix={'Rp. '} thousandSeparator={true} /><span>/{cicilan.tenore}Bulan</span>
																			</option>
																		)
																	}) : <option></option>
																}
																</select>
																</div>
															</div>
														);
													})}
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
										<h4 className="fnt-blue">Step 1</h4>
									</div>
									<div className="panel-bottom">
										<form className="clean-form">
											<h4>Personal Information</h4>
											{this.state.loanApplicationErr === '' ? <b /> : <ul>{ this.displayErr() }</ul>}
											<div className="form-spacer" />
											<h5 className="fnt-grey">Upload KTP</h5>
											<div style={Styles.uploadImage}>
												<input type="file" id="file-input" onChange={event => this.uploadKTPImage(event)} accept="image/x-png,image/gif,image/jpeg" />
											</div>
											<div className="form-spacer" />
											<h5 className="fnt-grey">Foto diri & KTP</h5>
											<div style={Styles.uploadImage}>
												<input type="file" id="file-input" onChange={event => this.uploadKTPSelfieImage(event)} accept="image/x-png,image/gif,image/jpeg" />
											</div>
											<div className="form-spacer" />
											<h5 className="fnt-grey">Bukti Alamat</h5>
											<div style={Styles.uploadImage}>
												<input type="file" id="file-input" onChange={event => this.uploadProofAddressImage(event)} accept="image/x-png,image/gif,image/jpeg" />
											</div>
											<div className="form-spacer" />
											<h5 className="fnt-grey">Kartu Keluarga</h5>
											<div style={Styles.uploadImage}>
												<input type="file" id="file-input" onChange={event => this.uploadFamilyCardImage(event)} accept="image/x-png,image/gif,image/jpeg" />
											</div>
											<h5 className="fnt-grey">
												Bukti Pendapatan 3 Bulan Terakhir
											</h5>
											<div style={Styles.uploadImage}>
												<input type="file" id="file-input" onChange={event => this.uploadProofIncome1(event)} accept="image/x-png,image/gif,image/jpeg" />
											</div>
											<div style={Styles.uploadImage}>
												<input type="file" id="file-input" onChange={event => this.uploadProofIncome2(event)} accept="image/x-png,image/gif,image/jpeg" />
											</div>
											<div style={Styles.uploadImage}>
												<input type="file" id="file-input" onChange={event => this.uploadProofIncome3(event)} accept="image/x-png,image/gif,image/jpeg" />
											</div>
											<h5 className="fnt-grey">Nama Lengkap</h5>
											<input className="input-full" type="text" onChange={event => this.setFullname(event)} />
											{ !this.state.validFullname ? <span style={{ color: 'red' }}>Nama Tidak boleh kurang dari 5 karakter.</span> : <span></span>}
											<div className="form-spacer" />
											<h5 className="fnt-grey">Nomor Handphone</h5>
											<input className="input-full" type="text" onChange={event => this.setPhone(event)} />
											{ !this.state.validPhone ? <span style={{ color: 'red' }}>Format salah. Nomor handphone harus diawali dengan angka 0</span> : <span></span> }
											<div className="form-spacer" />
											<h5 className="fnt-grey">Nomor Induk Kependudukan (No KTP)</h5>
											<input className="input-full" type="text" onChange={event => this.setNIK(event)} />
											{ !this.state.validNIK ? <span style={{ color: 'red' }}>Format NIK KTP masih salah</span> : <span></span> }
											<div className="form-spacer" />
											<h5 className="fnt-grey">Jenis Kelamin</h5>
											<select onChange={event => this.setGender(event)}>
												<option value="L">Laki-laki</option>
												<option value="P">Perempuan</option>
											</select>
											<div className="form-spacer" />
											<h5 className="fnt-grey">Tempat Lahir</h5>
											<input className="input-full" type="text" onChange={event => this.setBirthPlace(event)} />
											{ !this.state.validBirthplace ? <span style={{ color: 'red' }}>Format masih salah</span> : <span></span> }
											<div className="form-spacer" />
											<h5 className="fnt-grey">Tanggal Lahir</h5>
                      <DatePicker
                        selected={this.state.datePickerBirthdate}
                        onChange={(event) => this.setBirthday(event)}
                        locale="en-gb"
                        placeholderText="Tanggal Lahir" /> <span className="fnt-grey">Format: DD/MM/YYYY</span>
												{ !this.state.validBirthdate ? <div style={{ color: 'red' }}>Usia minimal harus 18 tahun</div> : <span></span> }
											<div className="form-spacer" />
											<h5 className="fnt-grey">Married Status</h5>
											<select onChange={event => this.setMarriedStatus(event)}>
												<option value="kawin">Kawin</option>
												<option value="belum kawin">Belum Kawin</option>
												<option value="janda/duda">Janda/Duda</option>
											</select>
											{ !this.state.validMarriedStatus ? <div style={{ color: 'red' }}>Anda belum memilih status pernikahan</div> : <span></span> }
											<div className="form-spacer" />
											<h5 className="fnt-grey">Nama Istri/Suami</h5>
											<input className="input-full" type="text" onChange={event => this.setSpouseName(event)} />
											{ !this.state.validSpouseName ? <div style={{ color: 'red' }}>Format masih salah</div> : <span></span> }
											<div className="form-spacer" />
											<h5 className="fnt-grey">Jumlah Anak</h5>
                      <select onChange={event => this.setChildren(event)}>
                        <option value="none">-- Jumlah Anak --</option>
												<option value="0">0</option>
												<option value="1">1</option>
												<option value="2">2</option>
                        <option value="3+">3+</option>
											</select>
                      { !this.state.validChildren && <span style={{ color: 'red'}}>Anda belum memilih jumlah anak</span>}
											<div className="form-spacer" />
											<h5 className="fnt-grey">Pendidikan Terakhir</h5>
											<select onChange={event => this.setLastEducation(event)}>
                        <option value="none">-- Pendidikan Terakhir --</option>
                        <option value="SD">SD</option>
                        <option value="SMP">SMP/Sederajat</option>
                        <option value="SMA">SMA/Sederajat</option>
                        <option value="D3">D3</option>
                        <option value="S1">S1</option>
                      </select>
                      { !this.state.validLastEducation && <span style={{ color: 'red'}}>Anda belum memilih tingkat pendidikan terakhir</span>}
                      <div className="form-spacer" />
											<h5 className="fnt-grey">Gaji/Pendapatan</h5>
											<NumberFormat
												value={this.state.earnings}
												prefix={'Rp '}
												decimalSeparator={'.'}
												thousandSeparator={true}
												placeholder={'Gaji/Pendapatan per bulan'}
												onChange={(event, value) => {
													this.setState({ earnings: value });
												}}/>
											<div className="form-spacer" />
											<h5 className="fnt-grey">Mulai Bekerja</h5>
											<DatePicker
												selected={this.state.datePickerStartJob}
												onChange={event => this.setStartDateJob(event)}
												locale="en-gb"
												placeholderText="Mulai Bekerja"/><span className="fnt-grey">Format: DD/MM/YYYY</span>
											{ !this.state.validStartDateJob ? <div style={{ color: 'red' }}>Format tanggal mulai bekerja masih salah</div> : <span /> }
											<div className="form-spacer" />
											<h5 className="fnt-grey">Address</h5>
											<input className="input-full" type="text" onChange={event => this.setAddress(event)} />
											{ !this.state.validAddress ? <span style={{ color: 'red' }}>Format Alamat Anda masih salah</span> : <span /> }
											<div className="form-spacer" />
											<h5 className="fnt-grey">Kelurahan</h5>
											<input className="input-full" type="text" onChange={event => this.setKelurahan(event)} />
											{ !this.state.validKelurahan ? <span style={{ color: 'red' }}>Format kelurahan tempat tinggal Anda masih salah</span> : <span /> }
											<div className="form-spacer" />
											<h5 className="fnt-grey">Kecamatan</h5>
											<input className="input-full" type="text" onChange={event => this.setKecamatan(event)} />
											{ !this.state.validKecamatan ? <span style={{ color: 'red' }}>Format Kecamatan tempat tinggal Anda masih salah</span> : <span /> }
											<h5 className="fnt-grey">Kota</h5>
											<input className="input-full" type="text" onChange={event => this.setCity(event)} />
											{ !this.state.validCity ? <span style={{ color: 'red' }}>Format Kota tempat tinggal Anda masih salah</span> : <span /> }
											<div className="form-spacer" />
											<h5 className="fnt-grey">Provinsi</h5>
											<input className="input-full" type="text" onChange={event => this.setProvince(event)} />
											{ !this.state.validProvinsi ? <span style={{ color: 'red' }}>Format Provinsi tempat tinggal Anda masih salah</span> : <span /> }
											<h5 className="fnt-grey">Kodepos</h5>
											<input className="input-full" type="text" onChange={event => this.setPostcode(event)} />
											{ !this.state.validKodepos ? <span style={{ color: 'red' }}>Format Kodepos tempat tinggal Anda masih salah</span> : <span /> }
											<div className="form-spacer" />
											<br />
											<br />
											<div className="row">
												<div className="col-sm-12 col-md-12 col-lg-12 text-right">
													<button className="tertiary" disabled={this.props.disableSubmitButton} onClick={event => this.clickLoanApplication(event)}>Submit</button>
													{!this.state.isChecked && <span style={{ color: 'red' }}>Harap isi form dengan baik dan benar. Silakan cek kembali form Anda</span>}
												</div>
											</div>
										</form>
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
