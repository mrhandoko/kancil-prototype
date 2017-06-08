import React from 'react';
import DatePicker from 'react-datepicker';

const SwiperForm1 = props => (
  <div className="swiper-slide swiper-slide-form">
    <form>
      <h5 className="fnt-grey">Nama Lengkap</h5>
      <input className="input-full" type="text" onChange={props.setFullname} value={props.full_name} />
      { !props.validFullname ? <mark className="secondary clean-list">Nama Tidak boleh kurang dari 5 karakter.</mark> : <span /> }
      <div className="form-spacer" />
      <h5 className="fnt-grey">Nomor Handphone</h5>
      <input className="input-full" type="text" onChange={props.setPhone} value={props.phone} />
      { !props.validPhone ? <mark className="secondary clean-list">Format salah. Nomor handphone harus diawali dengan angka 0</mark> : <span /> }
      <div className="form-spacer" />
      <h5 className="fnt-grey">Jenis Kelamin</h5>
      <select onChange={props.setGender}>
        <option value="L">Laki-laki</option>
        <option value="P">Perempuan</option>
      </select>
      <div className="form-spacer" />
      <h5 className="fnt-grey">Tempat Lahir</h5>
      <input className="input-full" type="text" onChange={props.setBirthPlace} value={props.birthplace} />
      { !props.validBirthplace ? <mark className="secondary clean-list">Format masih salah</mark> : <span /> }
      <div className="form-spacer" />
      <h5 className="fnt-grey">Tanggal Lahir</h5>
      <DatePicker
        selected={props.datePickerBirthdate}
        onChange={props.setBirthday}
        locale="en-gb"
        placeholderText="Tanggal Lahir"
      />
      <span className="fnt-grey">Format: DD/MM/YYYY</span>
      <div>{ !props.validBirthdate ? <mark className="secondary clean-list">Umur minimal harus 18 tahun</mark> : <span /> }</div>
      <div className="form-spacer" />
      <h5 className="fnt-grey">Pendidikan Terakhir</h5>
      <select onChange={props.setLastEducation} defaultValue={props.education}>
        <option value="none">-- Pendidikan Terakhir --</option>
        <option value="SD">SD</option>
        <option value="SMP">SMP/Sederajat</option>
        <option value="SMA">SMA/Sederajat</option>
        <option value="D3">D3</option>
        <option value="S1">S1</option>
      </select>
      { !props.validLastEducation && <span style={{ color: 'red'}}>Anda belum memilih tingkat pendidikan terakhir</span>}
    </form>
  </div>
);

export default SwiperForm1;
