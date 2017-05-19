import React from 'react'

const LoanApplication = () => (
  <div>
    <div className='container' style={{ margin: 25 }}>

      <div className='row'>
        <div className='col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-3 col-lg-offset-4'>

          <div className='panel-top'>
            <h4 className='fnt-blue'>Login</h4>
          </div>
          <div className='panel-bottom'>
            <form className='clean-form'>

              <h5 className='fnt-grey'>User Name</h5>
              <input type='text' name='' className='input-full' />

              <div className='form-spacer'></div>

              <h5 className='fnt-grey'>Email</h5>
              <input type='text' className='input-full' />

              <div className='form-spacer'></div>

              <h5 className='fnt-grey'>Phone Number</h5>
              <input type='text' className='input-full' />

              <div className='form-spacer'></div>

              <h5 className='fnt-grey'>Password</h5>
              <input type='text' className='input-full' />

              <div className='form-spacer'></div>

              <h5 className='fnt-grey'>Re-type Password</h5>
              <input type='text' className='input-full' />

              <div className='row' style={{ borderTop: 1 }}>
                <div className='col-sm-12 col-md-12 col-lg-12'>
                  <button className='tertiary input-full'>Sign Up</button>

                </div>
              </div>

            </form>

            <div className='row' style={{ borderTop: 1 }}>
              <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                <img src={require('../assets/images/facebook_login.png')} />
              </div>
            </div>

            <div className='row' style={{ borderTop: 1 }}>
              <div className='col-sm-12 col-md-12 col-lg-12 text-center'>
                <a href='' className='forgot-password fnt-sz-s1'>Already have an account?</a>
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>
  </div>
)

export default LoanApplication
