import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

class LoanApplication extends Component {
  constructor () {
    super ()
    this.state = {
      full_name: '',
      nik: '',
      gender: '',
      phone: '',
      birthplace: '',
      birthdate: '',
      married_status: '',
      wife_husband_name: '',
      children: '',
      education_level: '',
      earning: '',
      start_date_job: '',
      employment: '',
      address: '',
      kecamatan: '',
      kelurahan: '',
      provinsi: '',
      kodepos: '',
      lat: '',
      lng: '',
      ktp: '',
      ktp_selfie: '',
      proof_address: '',
      family_card: '',
      proof_income1: '',
      proof_income2: '',
      proof_income3: '',
      isApplied: false,
    }
  }
  uploadKTP(event) {
    this.setState({
      full_name: event.target.value
    })
  }
  uploadProfile(event) {
    this.setState({
      nik: event.target.value
    })
  }
  setFullname(event) {
    this.setState({
      full_name: event.target.value
    })
  }
  setPhone(event) {
    phone: event.target.value
  }
  setNIK(event) {
    this.setState({
      nik: event.target.value
    })
  }
  setGender(event) {
    this.setState({
      gender: event.target.value
    })
  }
  setBirthPlace(event) {
    this.setState({
      birthplace: event.target.value
    })
  }
  setBirthday(event) {
    this.setState({
      birthdate: event.target.value
    })
  }
  setMarriedStatus(event) {
    this.setState({
      married_status: event.target.value
    })
  }
  setSpouseName(event) {
    this.setState({
      wife_husband_name: event.target.value
    })
  }
  setChildren(event) {
    this.setState({
      children: event.target.value
    })
  }
  setEducationLevel(event) {
    this.setState({
      education_level: event.target.value
    })
  }
  setEarning(event) {
    this.setState({
      earning: event.target.value
    })
  }
  setStartDateJob(event) {
    this.setState({
      start_date_job: event.target.value
    })
  }
  setAddress(event) {
    this.setState({
      address: event.target.value
    })
  }
  setKelurahan(event) {
    this.setState({
      kelurahan: event.target.value
    })
  }
  setKecamatan(event) {
    this.setState({
      kecamatan: event.target.value
    })
  }
  setProvince(event) {
    this.setState({
      province: event.target.value
    })
  }
  setPostcode(event) {
    this.setState({
      kodepos: event.target.value
    })
  }
  clickLoanApplication(event) {
    event.preventDefault();
    this.setState({
      isApplied: true
    })
    console.log(this.state);
    axios.post("http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/userdetail/")
    .then(result => console.log(result.data))
    .catch(err => console.log(err));
  }
  componentWillMount() {
    if (window.localStorage.getItem('userDetail') !== null) {
      if (window.localStorage.length !==0) {
  			this.setState({
  				isLogin: true
  			})
  		}
    }
  }
  render() {
    if (this.state.isLogin) {
      if (this.state.isApplied) {
        return <Redirect to='/thankyou' />
      } else {
        return (
          <div>
            <Header />
            <div className='container' style={{ margin: 25 }}>
            	<div className='row'>
            		<div className='col-sm-12 col-md-3 col-md-offset-1 col-lg-2 col-lg-offset-2'>
            			<div className='panel-top'>
            				<h4 className='fnt-blue'>Your Phone</h4>
            			</div>
            			<div className='panel-bottom'>
            				<br />
            				<div className='text-center'>
            					<img src={require('../assets/images/phone1.jpg')} alt='' />
            					<h4>{ JSON.parse(localStorage.product).phone }<small>{ JSON.parse(localStorage.product).price }</small></h4>
            					<Link className='button primary' to='/phone'>Choose a Different Phone</Link>
            				</div>
            				<br />
            			</div>
            			<br />
            		</div>
            		<div className='col-sm-12 col-md-7 col-lg-6'>
                  <div className="panel-top">
                    <h4 className="fnt-blue">Step 1</h4>
                  </div>
            			<div className='panel-bottom'>
            				<form className='clean-form'>
          						<h4>Personal Information</h4>
          						<div className='form-spacer' />
                      <h5 className='fnt-grey'>Upload KTP</h5>
                      <input type="file" id="file-input" onChange={(event) => this.handleImageChange(event)} />
                      <label htmlFor="file-input" className='button' style={{ width: 120 }}>upload foto ktp</label>
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Foto diri & KTP</h5>
                      <input type="file" id="file-input" onChange={(event) => this.handleImageChange(event)} value={this.state.imagePreviewUrl} />
                      <label htmlFor="file-input" className='button' style={{ width: 200 }}>upload foto diri & KTP</label>
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Bukti Alamat</h5>
                      <input type="file" id="file-input" onChange={(event) => this.handleImageChange(event)} value={this.state.imagePreviewUrl}/>
                      <label htmlFor="file-input" className='button' style={{ width: 200 }}>upload bukti alamat</label>
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Kartu Keluarga</h5>
                      <input type="file" id="file-input" onChange={(event) => this.handleImageChange(event)} value={this.state.imagePreviewUrl} />
                      <label htmlFor="file-input" className='button' style={{ width: 200 }}>upload kartu keluarga</label>
                      <h5 className='fnt-grey'>Bukti Pendapatan 3 Bulan Terakhir</h5>
                      <input type="file" id="file-input" onChange={(event) => this.handleImageChange(event)} value={this.state.imagePreviewUrl} />
                      <label htmlFor="file-input" className='button' style={{ width: 200 }}>bukti pendapatan 1</label>
                      <br />
                      <input type="file" id="file-input" onChange={(event) => this.handleImageChange(event)} value={this.state.imagePreviewUrl} />
                      <label htmlFor="file-input" className='button' style={{ width: 200 }}>bukti pendapatan 2</label>
                      <br />
                      <input type="file" id="file-input" onChange={(event) => this.handleImageChange(event)} value={this.state.imagePreviewUrl} />
                      <label htmlFor="file-input" className='button' style={{ width: 200 }}>bukti pendapatan 3</label>
          						<h5 className='fnt-grey'>Nama Lengkap</h5>
          						<input className='input-full' type='text' onChange={event => this.setFullname(event)} />
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Nomor Handphone</h5>
          						<input className='input-full' type='text' onChange={event => this.setPhone(event)}/>
          						<div className='form-spacer' />
          						<h5 className='fnt-grey'>Nomor Induk Kependudukan</h5>
          						<input className='input-full' type='text' onChange={event => this.setNIK(event)} />
          						<div className='form-spacer' />
                      <h5 className='fnt-grey'>gender</h5>
                      <select onChange={event => this.setGender(event)}>
          							<option value='L'>Laki-laki</option>
          							<option value='P'>Perempuan</option>
          						</select>
          						<div className='form-spacer' />
                      <h5 className='fnt-grey'>Tempat Lahir</h5>
          						<input className='input-full' type='text' onChange={event => this.setBirthPlace(event)}/>
          						<div className='form-spacer' />
                      <h5 className='fnt-grey'>Tanggal Lahir</h5>
          						<input className='input-full' type='text' placeholder='DD/MM/YYYY' onChange={event => this.setBirthday(event)} />
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Married Status</h5>
                      <select onChange={event => this.setMarriedStatus(event)}>
          							<option value='kawin'>Kawin</option>
          							<option value='belum kawin'>Belum Kawin</option>
          						</select>
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Nama Istri/Suami</h5>
          						<input className='input-full' type='text' onChange={event => this.setSpouseName(event)}/>
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Jumlah Anak</h5>
          						<input className='input-full' type='text' onChange={event => this.setChildren(event)}/>
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Tingkat Pendudukan</h5>
          						<input className='input-full' type='text' onChange={event => this.setEducationLevel(event)} />
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Gaji/Pendapatan</h5>
          						<input className='input-full' type='text' onChange={event => this.setEarning(event)} />
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Mulai Bekerja</h5>
          						<input className='input-full' type='text' onChange={event => this.setStartDateJob(event)} placeholder='DD/MM/YYYY' />
          						<div className='form-spacer' />
                      <h5 className='fnt-grey'>Address</h5>
          						<input className='input-full' type='text' onChange={event => this.setAddress(event)} />
          						<div className='form-spacer' />
                      <h5 className='fnt-grey'>Kelurahan</h5>
          						<input className='input-full' type='text' onChange={event => this.setKelurahan(event)} />
          						<div className='form-spacer' />
                      <h5 className='fnt-grey'>Kecamatan</h5>
          						<input className='input-full' type='text' onChange={event => this.setKecamatan(event)} />
          						<div className='form-spacer' />
                      <h5 className='fnt-grey'>Provinsi</h5>
          						<input className='input-full' type='text' onChange={event => this.setProvince(event)} />
                      <h5 className='fnt-grey'>Kodepos</h5>
          						<input className='input-full' type='text' onChange={event => this.setPostcode(event)} />
          						<div className='form-spacer' />
          						<br />
          						<br />
          						<div className='row'>
          							<div className='col-sm-12 col-md-12 col-lg-12 text-right'>
          								<button className='tertiary' onClick={event => this.clickLoanApplication(event)}>Submit</button>
          							</div>
          						</div>
                    </form>
                    </div>
            			</div>
            		</div>
            	</div>
            <Footer />
          </div>
        )
      }
    } else {
      return <Redirect to='/signup' />
    }
  }
}

export default LoanApplication;
