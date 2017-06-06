import React from 'react';

const SwiperForm3 = props => (
  <div className="swiper-slide swiper-slide-form">
    <form>
    <div className="form-spacer" />
    <h5 className="fnt-grey">Address</h5>
    <input className="input-full" type="text" onChange={props.setAddress} />
    { !props.validAddress ? <mark className="secondary clean-list">Format Alamat Anda masih salah</mark> : <span /> }
    <div className="form-spacer" />
    <h5 className="fnt-grey">Kelurahan</h5>
    <input className="input-full" type="text" onChange={props.setKelurahan} />
    { !props.validKelurahan ? <mark className="secondary clean-list">Format kelurahan tempat tinggal Anda masih salah</mark> : <span /> }
    <div className="form-spacer" />
    <h5 className="fnt-grey">Kecamatan</h5>
    <input className="input-full" type="text" onChange={props.setKecamatan} />
    { !props.validKecamatan ? <mark className="secondary clean-list">Format Kecamatan tempat tinggal Anda masih salah</mark> : <span /> }
    <h5 className="fnt-grey">Kota</h5>
    <input className="input-full" type="text" onChange={props.setCity} />
    { !props.validCity ? <mark className="secondary clean-list">Format Kota tempat tinggal Anda masih salah</mark> : <span /> }
    <div className="form-spacer" />
    <h5 className="fnt-grey">Provinsi</h5>
    <input className="input-full" type="text" onChange={props.setProvince} />
    { !props.validProvince ? <mark className="secondary clean-list">Format Provinsi tempat tinggal Anda masih salah</mark> : <span /> }
    <h5 className="fnt-grey">Kodepos</h5>
    <input className="input-full" type="text" onChange={props.setPostcode} />
    { !props.validPostcode ? <mark className="secondary clean-list">Format Kodepos tempat tinggal Anda masih salah</mark> : <span /> }
    </form>
  </div>
);

export default SwiperForm3;
