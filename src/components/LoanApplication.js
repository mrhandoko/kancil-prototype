import React from 'react'

const LoanApplication = () => (
  <div className='container' style={{ margin: 25 }}>
  	<div className='row'>
  		<div className='col-sm-12 col-md-3 col-md-offset-1 col-lg-2 col-lg-offset-2'>
  			<div className='panel-top'>
  				<h4 className='fnt-blue'>Your Phone</h4>
  			</div>
  			<div className='panel-bottom'>
  				<br />
  				<div className='text-center'>
  					<img src='img/phone1.jpg' alt='' />
  					<h4>Samsung Galaxy s8<small>Rp. 3.500.000</small></h4>
  					<a className='button primary' href='#product-specs' data-modal-open>Choose a Different Phone</a>
  				</div>
  				<br />
  			</div>
  			<br />
  		</div>
  		<div className='col-sm-12 col-md-7 col-lg-6'>
  			<div className='panel-top'>
  				<h4 className='fnt-blue'>Step 1</h4>
  			</div>
  			<div className='panel-bottom'>
  				<form className='clean-form'>
  						<h4>Personal Information</h4>
  						<div className='form-spacer'></div>
  						<h5 className='fnt-grey'>Nama Lengkap</h5>
  						<input className='input-full' type='text' />
  						<div className='form-spacer'></div>
  						<h5 className='fnt-grey'>Alamat</h5>
  						<input type='text' />
  						<div className='form-spacer'></div>
  						<h5>Agree</h5>
  						<div className='input-group'>
  							<input type='checkbox' id='chk1' tabindex='0' /> <label for='chk1'>&nbsp;I agree</label>
  						</div>
  						<div className='form-spacer'></div>
  						<h5>Status Menikah</h5>
  						<select>
  							<option>Single</option>
  							<option>Married</option>
  						</select>
  						<br />
  						<br />
  						<div className='row'>
  							<div className='col-sm-6 col-md-6 col-lg-6'>
  								<button>Back</button>
  							</div>
  							<div className='col-sm-6 col-md-6 col-lg-6 text-right'>
  								<button className='tertiary'>Submit</button>
  							</div>
  						</div>
  					</form>
  			</div>
  		</div>
  	</div>
  </div>
)

export default LoanApplication
