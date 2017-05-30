import React from 'react';
import { Link } from 'react-router-dom';

const HomeContent = () => (
  <div>
    <div className="container" style={{margin: '5vh 0'}}>
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-8 col-lg-offset-2">
          <center><h1>CARA KERJA</h1></center>
          <br />
          <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 text-center" style={{padding: '0px 15px'}}>
              <img src="img/list.png" width={105} alt="" /><br />
              Ajukan program cicilan  Kawan Cicil dengan  mendaftarkan akun FB, kartu identitas, dan bukti keuangan
              <br /><br />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 text-center" style={{padding: '0px 15px'}}>
              <img src="img/hand_phone.png" width={100} alt="" /><br />
              Pilih smartphone dan rencana cicilan hanya dalam waktu 10 menit
              <br /><br />
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 text-center" style={{padding: '0px 15px'}}>
              <img src="img/checked.png" width={130} alt="" /><br />
              Smartphone impianmu akan segera dikirimkan setelah aplikasi cicilan-mu diterima!
            </div>
          </div>
        </div>
      </div>
    </div>
    <section className="parallax parallax-1">
      <div className="row">
        <div className="col-sm-6 col-md-6 col-lg-6 col-sm-offset-3 text-center" style={{padding: '0px 15px'}}>
          <Link to="phone"><img src="img/phone.png" width={190} className="hidden-sm" alt="" />
            <img src="img/phone.png" className="hidden-lg hidden-md" alt="" /></Link>
        </div>
      </div>
    </section>
  </div>
)

export default HomeContent
