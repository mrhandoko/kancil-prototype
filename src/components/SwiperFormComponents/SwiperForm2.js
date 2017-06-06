import React from 'react';

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
    <h5 className="fnt-grey">Pendidikan Terakhir</h5>
    <select onChange={props.setLastEducation}>
      <option value="none">-- Pendidikan Terakhir --</option>
      <option value="SD">SD</option>
      <option value="SMP">SMP/Sederajat</option>
      <option value="SMA">SMA/Sederajat</option>
      <option value="D3">D3</option>
      <option value="S1">S1</option>
    </select>
    { !props.validLastEducation && <span style={{ color: 'red'}}>Anda belum memilih tingkat pendidikan terakhir</span>}
    <div className="form-spacer" />
    <h5 className="fnt-grey">Gaji/Pendapatan</h5>
    <div className="form-spacer" />
    <h5 className="fnt-grey">Mulai Bekerja</h5>
    { !props.validStartDateJob ? <div style={{ color: 'red' }}>Format tanggal mulai bekerja masih salah</div> : <span /> }
    </form>
  </div>
);

export default SwiperForm2;
