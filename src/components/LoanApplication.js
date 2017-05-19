import React, { Component } from 'react'

import Header from './Header'
import Footer from './Footer'

class LoanApplication extends Component {
  constructor () {
    super ()
    this.state = {
      loanApplication: {
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
        lng: ''
      }
    }
  }
  render () {
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
      						<input className='input-full' type='text' />
                  <h5 className='fnt-grey'>Profile Upload</h5>
      						<input className='input-full' type='text' />
      						<h5 className='fnt-grey'>Nama Lengkap</h5>
      						<input className='input-full' type='text' />
      						<div className='form-spacer' />
      						<h5 className='fnt-grey'>Nomor Induk Kependudukan</h5>
      						<input type='text' />
      						<div className='form-spacer' />
                  <h5 className='fnt-grey'>gender</h5>
                  <select>
      							<option>Laki-laki</option>
      							<option>Perempuan</option>
      						</select>
      						<div className='form-spacer' />
                  <h5 className='fnt-grey'>Tempat Lahir</h5>
      						<input type='text' />
      						<div className='form-spacer' />
                  <h5 className='fnt-grey'>Tanggal Lahir</h5>
      						<input type='text' placeholder='DD/MM/YYYY' />
      						<div className='form-spacer' />
                  <h5 className='fnt-grey'>Address</h5>
      						<input type='text' />
      						<div className='form-spacer' />
                  <h5 className='fnt-grey'>Kelurahan</h5>
      						<input type='text' />
      						<div className='form-spacer' />
                  <h5 className='fnt-grey'>Kecamatan</h5>
      						<input type='text' />
      						<div className='form-spacer' />
                  <h5 className='fnt-grey'>Provinsi</h5>
      						<input type='text' />
                  <h5 className='fnt-grey'>Kodepos</h5>
      						<input type='text' />
      						<div className='form-spacer' />
      						<br />
      						<br />
      						<div className='row'>
      							<div className='col-sm-12 col-md-12 col-lg-12 text-right'>
      								<button className='tertiary'>Submit</button>
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

export default LoanApplication
