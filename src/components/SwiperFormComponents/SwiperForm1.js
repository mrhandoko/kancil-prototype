import React from 'react';

const SwiperForm1 = props => (
  <div className="swiper-slide swiper-slide-form">
    <form>
      <h5 className="fnt-grey">Nama Lengkap</h5>
      <input className="input-full" type="text" onChange={props.setFullname} />
      { !props.validFullname ? <mark className="secondary clean-list">Nama Tidak boleh kurang dari 5 karakter.</mark> : <span /> }
      <div className="form-spacer" />
      <h5 className="fnt-grey">Nomor Handphone</h5>
      <input className="input-full" type="text" onChange={props.setPhone} />
      { !props.validPhone ? <mark className="secondary clean-list">Format salah. Nomor handphone harus diawali dengan angka 0</mark> : <span /> }
      <div className="form-spacer"/>
      <h5 className="fnt-grey">Nomor Induk Kependudukan (No KTP)</h5>
      <input className="input-full" type="text" onChange={props.setNIK}/>
      { !props.validNIK ? <mark className="secondary clean-list">Format NIK KTP masih salah</mark> : <span /> }
      <div className="form-spacer" />
      <h5 className="fnt-grey">Jenis Kelamin</h5>
      <select onChange={props.setGender}>
        <option value="L">Laki-laki</option>
        <option value="P">Perempuan</option>
      </select>
      <div className="form-spacer" />
      <h5 className="fnt-grey">Tempat Lahir</h5>
      <input className="input-full" type="text" onChange={props.setBirthPlace}/>
      { !props.validBirthplace ? <mark className="secondary clean-list">Format masih salah</mark> : <span /> }
      <div className="form-spacer" />
      <h5 className="fnt-grey">Tanggal Lahir</h5>
    </form>
  </div>
);

export default SwiperForm1;
