import React from 'react';
import { Link } from 'react-router-dom';

const HomeContent3 = () => (
  <div className="container" style={{margin: '25px 0'}}>
    <div className="row">
      <div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-10 col-lg-offset-1">
        <br />
        <center><h2>Pengemudi Kelas Satu - MOTOR</h2></center>
        <br />
        <h3>Tentang Program</h3>
        <p>
          Selamat Kamu terpilih untuk menjadi bagian dari Kawan Cicil X UBER Loyalty Reward Program! Dengan menjadi bagian program ini, Kamu berkesempatan untuk mendapatkan akses atas paket reward ini yang terdiri dari:
        </p>
        <br />
        <span className="highlighted1">• Cicilan smartphone</span>
        <br />
        <br />
        <p>
          Kawan Cicil adalah sebuah layanan finansial berbasis internet yang memberikan kemudahan bagi kamu untuk menyicil smartphone dengan skema pembayaran kembali yang dapat disesuaikan dengan mudah.
        </p>
        <br />
        <h3>Cara Kerja</h3>
        <p>
          Isi dengan lengkap dan tepat formulir online di sini:
          <br />
          <br />
          <Link className="button primary" href="#"><img src="img/form_icon.png" style={{verticalAlign: 'middle'}} width={25} to="/phone" alt="" />&nbsp;Application Form</Link>
          <br />
          <br />
          Hingga Kawan Cicil menghubungimu untuk datang ke tempat pengambilan smartphone, siapkan dengan Anda:
        </p><ul style={{marginLeft: 30}}>
          <li>Notifikasi UBER atas program ini</li>
          <li>Kartu Keluarga (Asli)</li>
          <li>BPKB</li>
          <li>Rekening Koran</li>
        </ul>
        <br />
        <b>Voila! Kamu bisa langsung membawa pulang smartphone pilihan-mu!</b>
        <p />
      </div>
    </div>
  </div>
)

export default HomeContent3
