import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Home = () => (
  <div>
    <Header />
    <div className='swiper-container'>
      <div className='swiper-wrapper'>
        <div className='swiper-slide'>
          <h1>Kancil is a lending company<small>Something else here</small></h1>
        </div>
        <div className='swiper-slide'>Slide 2</div>
        <div className='swiper-slide'>Slide 3</div>
      </div>
      <div className='swiper-pagination' />
    </div>
    <Footer />
  </div>
)

export default Home
