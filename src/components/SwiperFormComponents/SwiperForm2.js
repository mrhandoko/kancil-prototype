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

const SwiperForm2 = props => (
  <div className="swiper-slide swiper-slide-form">
    <form>
    <div className="form-spacer" />
    <h5 className="fnt-grey">Married Status</h5>
    <select onChange={props.setMarriedStatus}>
      <option value="kawin">Kawin</option>
      <option value="belum kawin">Belum Kawin</option>
      <option value="janda/duda">Janda/Duda</option>
    </select>
    { !props.validMarriedStatus ? <div style={{ color: 'red' }}>Anda belum memilih status pernikahan</div> : <span></span> }
    <div className="form-spacer" />
    <h5 className="fnt-grey">Nama Istri/Suami</h5>
    <input className="input-full" type="text" onChange={props.setSpouseName} />
    { !props.validSpouseName ? <div style={{ color: 'red' }}>Format masih salah</div> : <span></span> }
    <div className="form-spacer" />
    <h5 className="fnt-grey">Jumlah Anak</h5>
    <select onChange={props.setChildren}>
      <option value="none">-- Jumlah Anak --</option>
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3+">3+</option>
    </select>
    { !props.validChildren && <span style={{ color: 'red'}}>Anda belum memilih jumlah anak</span>}
    <div className="form-spacer" />
    <h5 className="fnt-grey">Kartu Keluarga</h5>
    <div style={Styles.uploadImage}>
      <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" onChange={props.uploadFamilyCardImage} />
    </div>
    </form>
  </div>
);

export default SwiperForm2;
