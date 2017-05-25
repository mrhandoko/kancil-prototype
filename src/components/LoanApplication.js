import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

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
      address: '',
      kecamatan: '',
      kelurahan: '',
      provinsi: '',
      kodepos: '',
      urlktp: '',
      urlprofilephoto: '',
      lat: '',
      lng: '',
      isApplied: false
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
  }
  render() {
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
          					<h4>Samsung Galaxy s8<small>Rp. 3.500.000</small></h4>
          					<a className='button primary' href='#product-specs' data-modal-open>Choose a Different Phone</a>
          				</div>
          				<br />
          			</div>
          			<br />
          		</div>
          		<div className='col-sm-12 col-md-7 col-lg-6'>
          			<div className='panel-bottom'>
          				<form className='clean-form'>
        						<h4>Personal Information</h4>
        						<div className='form-spacer' />
                    <h5 className='fnt-grey'>KTP Upload</h5>
        						<input className='input-full' type='text' onChange={event => this.uploadKTP(event)} />
                    <h5 className='fnt-grey'>Profile Upload</h5>
        						<input className='input-full' type='text' onChange={event => this.uploadProfile(event)} />
        						<h5 className='fnt-grey'>Nama Lengkap</h5>
        						<input className='input-full' type='text' onChange={event => this.setFullname(event)} />
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
  }
}

export default LoanApplication
