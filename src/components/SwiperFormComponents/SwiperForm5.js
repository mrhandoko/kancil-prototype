import React from 'react';
import NumberFormat from 'react-number-format';
import DatePicker from 'react-datepicker';

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

const SwiperForm5 = props => (
  <div className="swiper-slide swiper-slide-form">
    <form>
      <div className="form-spacer" />
      <h5 className="fnt-grey">Gaji/Pendapatan</h5>
      <NumberFormat
        value={props.earnings}
        prefix={'Rp '}
        decimalSeparator={'.'}
        thousandSeparator={true}
        placeholder={'Gaji/Pendapatan per bulan'}
        onChange={props.setEarnings}
      />
      <div className="form-spacer" />
      <h5 className="fnt-grey">Mulai Bekerja</h5>
      <DatePicker
        selected={props.datePickerStartJob}
        onChange={props.setStartDateJob}
        locale="en-gb"
        placeholderText="Mulai Bekerja"/><span className="fnt-grey">Format: DD/MM/YYYY</span>
      { !props.validStartDateJob ? <div style={{ color: 'red' }}>Format tanggal mulai bekerja masih salah</div> : <span /> }
      <h5 className="fnt-grey">
        Bukti Pendapatan 3 Bulan Terakhir
      </h5>
      <div style={Styles.uploadImage}>
        <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" onChange={props.uploadProofIncome1} />
      </div>
      <div style={Styles.uploadImage}>
        <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" onChange={props.uploadProofIncome2} />
      </div>
      <div style={Styles.uploadImage}>
        <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" onChange={props.uploadProofIncome3} />
      </div>
    </form>
  </div>
);

export default SwiperForm5;
