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

const SwiperForm4 = () => (
  <div className="swiper-slide swiper-slide-form">
    <form>
    <div className="form-spacer" />
    <h5 className="fnt-grey">Upload KTP</h5>
    <div style={Styles.uploadImage}>
      <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" />
    </div>
    <div className="form-spacer" />
    <h5 className="fnt-grey">Foto diri & KTP</h5>
    <div style={Styles.uploadImage}>
      <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" />
    </div>
    <div className="form-spacer" />
    <h5 className="fnt-grey">Bukti Alamat</h5>
    <div style={Styles.uploadImage}>
      <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" />
    </div>
    <div className="form-spacer" />
    <h5 className="fnt-grey">Kartu Keluarga</h5>
    <div style={Styles.uploadImage}>
      <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" />
    </div>
    <h5 className="fnt-grey">
      Bukti Pendapatan 3 Bulan Terakhir
    </h5>
    <div style={Styles.uploadImage}>
      <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" />
    </div>
    <div style={Styles.uploadImage}>
      <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" />
    </div>
    <div style={Styles.uploadImage}>
      <input type="file" id="file-input" accept="image/x-png,image/gif,image/jpeg" />
    </div>
    </form>
  </div>
);

export default SwiperForm4;
