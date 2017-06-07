import React from 'react';

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

const SwiperForm4 = props => (
  <div className="swiper-slide swiper-slide-form">
    <form>
			<div className="form-spacer"/>
			<h5 className="fnt-grey">Nomor Induk Kependudukan (No KTP)</h5>
			<input className="input-full" type="text" onChange={props.setNIK} />
			{ !props.validNIK ? <mark className="secondary clean-list">Format NIK KTP masih salah</mark> : <span /> }
	    <div className="form-spacer" />
	    <h5 className="fnt-grey">Upload KTP</h5>
	    <div style={Styles.uploadImage}>
	      <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" onChange={props.uploadKTPImage} />
	    </div>
	    <div className="form-spacer" />
	    <h5 className="fnt-grey">Foto diri & KTP</h5>
	    <div style={Styles.uploadImage}>
	      <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" onChange={props.uploadKTPSelfieImage} />
	    </div>
			<div className="row">
				<div className="col-sm-12 col-md-12 col-lg-12 text-right">
				{!props.isChecked && <span style={{ color: 'red' }}><center>Harap isi form dengan baik dan benar. Silakan cek kembali form Anda</center></span>}
				{props.validFinanceProductID ? <span /> : <span style={{ color: 'red' }}><center>Anda belum memilih cicilan</center></span>}
				<button className="tertiary" disabled={props.disableSubmitButton} onClick={props.clickLoanApplication}>Submit</button>
				</div>
			</div>
    </form>
  </div>
);

export default SwiperForm4;
