import React from 'react';

import Header from './Header';
import Footer from './Footer';

const FAQ = () => (
  <div>
    <Header />
    <div className="container" style={{padding: '10vh 0'}}>
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-8 col-lg-offset-2">
          <h1>FAQ</h1>
          <br />
          <div className="arrows">
            <input type="radio" name="accordion" id="cb1" />
            <section className="box">
              <label className="box-title" htmlFor="cb1">Apa itu Kawan Cicil?</label>
              <label className="box-close" htmlFor="acc-close" />
              <div className="box-content">Kawan Cicil adalah sebuah solusi kredit instan di mana Anda mengambil cicilan atas barang-barang tanpa kartu kredit. Kami menawarkan 6 bulan dan 12 bulan program cicilan dengan bunga kompetitif.</div>
            </section>
            <input type="radio" name="accordion" id="cb2" />
            <section className="box">
              <label className="box-title" htmlFor="cb2">Apakah Kawan Cicil dapat dipercaya?</label>
              <label className="box-close" htmlFor="acc-close" />
              <div className="box-content">Kawan Cicil adalah sebuah nama dagang dari PT XXX yang merupakan anak perusahaan dari Sinarmas, perusahaan yang terdaftar di Otoritas Jasa Keuangan (OJK) Republik Indonesia.</div>
            </section>
            <input type="radio" name="accordion" id="cb3" />
            <section className="box">
              <label className="box-title" htmlFor="cb3">Di mana saja Kawan Cicil beroperasi?</label>
              <label className="box-close" htmlFor="acc-close" />
              <div className="box-content">Untuk saat ini layanan Kami baru tersedia di wilayah Jabodetabek (Jakarta, Bogor, Depok, Tangerang, dan Bekasi)</div>
            </section>
            <input type="radio" name="accordion" id="cb4" />
            <section className="box">
              <label className="box-title" htmlFor="cb4">Apakah informasi pribadi saya aman dengan Kawan Cicil?</label>
              <label className="box-close" htmlFor="acc-close" />
              <div className="box-content">Melindungi informasi pribadi Anda merupakan prioritas utama Kami. Kami mengenkripsi data Anda dan menerapkan keamanan fisik, elektronik, dan prosedur untuk melindungi informasi Anda. Kami tidak menjual atau menyewakan informasi Anda kepada pihak mana pun kecuali dibutuhkan oleh SMMF untuk mengeluarkan kebutuhan yang terkait dengan pembiayaan atau dibutuhkan oleh Pemerintah.</div>
            </section>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default FAQ
