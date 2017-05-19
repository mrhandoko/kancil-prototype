import React from 'react'

import Header from './Header'
import Footer from './Footer'

const LoanApplication = () => (
  <div>
    <Header />
    <div className='container' style={{ marginTop: 25 }}>
      <div className='row'>
        <div className='col-sm-12 col-md-3 col-md-offset-1 col-lg-2 col-lg-offset-2'>
          <div className='phone_filters'>
            <div className='filter-top'>
              <h3 className='fnt-blue'>Filters</h3>
            </div>
            <div className='filter-bottom'>
              <div className='col-sm-12 col-md-6 col-lg-4'>
                <div className='card fluid'>
                  <div className='section text-center'>
                    <img src={'http://s3.amazonaws.com/digitaltrends-uploads-prod/2017/03/S8_PHOTOS.144.jpg'} alt='' width='200' />
                    <h4>Phone<small>Rp. 3.500.000</small></h4>
                    <button to='/loan-application' className='button fnt-sz-s2'>Buy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-7 col-lg-6'>
          <div className='row'>
            <div className='col-sm-12 col-md-12 col-lg-12'>
              <div className='row' style={{ borderBottom: 1 }}>
                <div className='col-sm-6 col-md-6 col-lg-6'>
                  <div style={{ marginTop: 10 }} className='fnt-sz-s1'>Showing 12 of 53 Products</div>
                </div>
                <div className='text-right col-sm-6 col-md-6 col-lg-6 fnt-sz-s1'>
                  Sort by:
                  <form className='clean-form sort'>
                    <select>
                      <option>ASC</option>
                      <option>DESC</option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
              <input type='text' placeholder='Nama lengkap' />
              <br />
              <input type='text' placeholder='Mobile phone' />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default LoanApplication
