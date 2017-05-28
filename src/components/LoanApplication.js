import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
// import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

const Styles = {
  uploadImage: {
    borderBottom: '1px solid lightgray',
    borderRight: '1px solid lightgray',
    borderTop: '1px solid lightgray',
    borderLeft: '1px solid lightgray',
    padding: 10, margin: 15,
    cursor: 'pointer'
  }
}

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
    this.setState({
      phone: event.target.value
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
  uploadKTPImage(event) {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        fileKTP: file,
        ktp: reader.result
      });
    }
    reader.readAsDataURL(file)
  }
  uploadKTPSelfieImage(event) {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        ktp_selfie: reader.result,
        fileKTPSelfie: file
      });
    }
    reader.readAsDataURL(file)
  }
  uploadProofAddressImage(event) {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        proof_address: reader.result,
        fileProofAddress: file
      });
    }
    reader.readAsDataURL(file)
  }
  uploadFamilyCardImage(event) {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        family_card: reader.result,
        fileFamilyCard: file
      });
    }
    reader.readAsDataURL(file)
  }
  uploadProofIncome1(event) {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        proof_income1: reader.result,
        fileProofIncome1: file
      });
    }
    reader.readAsDataURL(file)
  }
  uploadProofIncome2(event) {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        proof_income2: reader.result,
        fileProofIncome2: file
      });
    }
    reader.readAsDataURL(file)
  }
  uploadProofIncome3(event) {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        proof_income3: reader.result,
        fileProofIncome3: file
      });
    }
    reader.readAsDataURL(file)
  }
  clickLoanApplication(event) {
    event.preventDefault();
    this.setState({
      isApplied: true
    })
    console.log(this.state);
    // axios.post("http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/userdetail/", this.state, {header:{
    //   token: JSON.parse(localStorage.userDetail).token
    // }})
    // .then(result => {
    //   this.setState({ product: JSON.parse(localStorage.product).phone })
    //   localStorage.setItem('loanApplication', this.state)
    //   this.setState({ isApplied: true })
    // })
    // .catch(err => console.log(err));
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
        return <Redirect to='/status' />
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
                      <div style={Styles.uploadImage}>
                        <input type="file" id="file-input" onChange={(event) => this.uploadKTPImage(event)} />
                      </div>
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Foto diri & KTP</h5>
                      <div style={Styles.uploadImage}>
                        <input type="file" id="file-input" onChange={(event) => this.uploadKTPSelfieImage(event)} />
                      </div>
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Bukti Alamat</h5>
                      <div style={Styles.uploadImage}>
                        <input type="file" id="file-input" onChange={(event) => this.uploadProofAddressImage(event)} />
                      </div>
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Kartu Keluarga</h5>
                      <div style={Styles.uploadImage}>
                        <input type="file" id="file-input" onChange={(event) => this.uploadFamilyCardImage(event)} />
                      </div>
                      <h5 className='fnt-grey'>Bukti Pendapatan 3 Bulan Terakhir</h5>
                      <div style={Styles.uploadImage}>
                        <input type="file" id="file-input" onChange={(event) => this.uploadProofIncome1(event)} />
                      </div>
                      <div style={Styles.uploadImage}>
                        <input type="file" id="file-input" onChange={(event) => this.uploadProofIncome2(event)} />
                      </div>
                      <div style={Styles.uploadImage}>
                        <input type="file" id="file-input" onChange={(event) => this.uploadProofIncome3(event)} />
                      </div>
          						<h5 className='fnt-grey'>Nama Lengkap</h5>
          						<input className='input-full' type='text' onChange={event => this.setFullname(event)} />
                      <div className='form-spacer' />
                      <h5 className='fnt-grey'>Nomor Handphone</h5>
          						<input className='input-full' type='text' onChange={event => this.setPhone(event)}/>
          						<div className='form-spacer' />
          						<h5 className='fnt-grey'>Nomor Induk Kependudukan (No KTP)</h5>
          						<input className='input-full' type='text' onChange={event => this.setNIK(event)} />
          						<div className='form-spacer' />
                      <h5 className='fnt-grey'>Jenis Kelamin</h5>
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
                        <option value='janda/duda'>Janda/Duda</option>
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
