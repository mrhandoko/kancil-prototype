import React from 'react'
// import VanillaModal from 'vanilla-modal';
import { Link } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { partnershipId } from '../../actions'

class HomeContent1 extends React.Component {
	// componentDidMount() {
	//   this.modal = new VanillaModal()
	// }
	render() {
		return (
			<div className="container" style={{ margin: '25px 0' }}>
				<div className="row">
					<div className="col-sm-12 col-md-8 col-md-offset-2 col-lg-10 col-lg-offset-1">
						<center><h2>Pengemudi Kelas Satu - MOBIL</h2></center>
						<br />
						<h3>Tentang Program</h3>
						<p>
							Selamat Kamu terpilih untuk menjadi bagian dari Kawan Cicil X UBER Loyalty Reward Program! Dengan menjadi bagian program ini, Kamu berkesempatan untuk mendapatkan akses atas paket reward ini yang terdiri dari:
						</p>
						<br />
						<span className="highlighted1">• Cicilan smartphone</span>
						<br />
						<span className="highlighted1">
							• Kartu Pertamina senilai 1 juta (fuel card)
						</span>
						<br />
						<span className="highlighted1">
							• Cashback 20% atau 100 ribu jika berinvestasi dengan Kelola (
							<a href="#cashback" data-modal-open>Information</a>
							)
						</span>
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
							<Link className="button primary" to="/phone">
								<img
									src="img/form_icon.png"
									style={{ verticalAlign: 'middle' }}
									width={25}
									alt=""
								/>
								&nbsp;Application Form
							</Link>
							<br />
							<br />
							Hingga Kawan Cicil menghubungimu untuk datang ke tempat pengambilan smartphone, siapkan dengan Anda:
						</p><ul style={{ marginLeft: 30 }}>
							<li>Notifikasi UBER atas program ini</li>
							<li>Kartu Keluarga (Asli)</li>
							<li>BPKB</li>
							<li>Rekening Koran</li>
						</ul>
						<br />
						<b>
							Voila! Kamu bisa langsung membawa pulang smartphone pilihan-mu!
						</b>
						<br />
						<br />
						<div className="modal">
							<div className="modal-inner">
								<span data-modal-close>×</span>
								<div className="modal-content" />
							</div>
						</div>

						<div id="cashback" style={{ display: 'none' }}>
							<ul>
								<li>
									Cashback hanya berlaku bagi investasi aktif di dalam aplikasi
									{' '}
									<a href="http://www.kelolaapp.com">Kelola</a>
									.
								</li>
								<li>
									Cashback hanya dapat ditarik setelah investasi berjalan minimal 1 bulan; kurang dari 1 bulan cashback tidak bisa ditarik:
									<ul>
										Contoh:
										<li>
											Bulan 1 seseorang berinvestasi sebesar 300 ribu Rupiah
										</li>
										<ul>
											<li>
												Jumlah dana dikelola = 300 ribu + (300 ribu x 20%) = 360 ribu Rupiah
											</li>
											<li>
												Investasi ditarik sebelum 1 bulan : 300 ribu Rupiah
											</li>
											<li>
												Investasi ditarik setelah 1 bulan : 360 ribu Rupiah
											</li>
										</ul>
									</ul>
								</li>
							</ul>
							<p />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch =>
	bindActionCreators({ partnershipId }, dispatch)

export default connect(null, mapDispatchToProps)(HomeContent1)
