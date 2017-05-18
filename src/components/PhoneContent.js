import React, { Component } from 'react'
import axios from 'axios'

class PhoneContent extends Component {
  constructor () {
    super()
    this.state = {
      products: []
    }
  }
  componentDidMount () {
    axios.get('http://localhost:5000/products')
    .then(response => this.setState({ products: response.data }))
    .catch(err => console.error(err))
  }
  render () {
    return (
      <div className='container' style={{ marginTop: 25 }}>
      	<div className='row'>
      		<div className='col-sm-12 col-md-3 col-md-offset-1 col-lg-2 col-lg-offset-2'>
      			<div className='phone_filters'>
      				<div className='filter-top'>
      					<h3 className='fnt-blue'>Filters</h3>
      				</div>
      				<div className='filter-bottom'>
      					<form className='clean-form'>
      						<h5>SEARCH</h5>
      						<input type='text' />
      						<div style={{ height: 10 }}></div>
      						<h5>BRAND</h5>
      						<div className='input-group' style={{ paddingLeft: 7 }}>
      							<input type='checkbox' id='chk1' tabindex='0' /> <label for='chk1'>&nbsp;Samsung</label>
      							<br />
      							<input type='checkbox' id='chk2' tabindex='1' /> <label for='chk2'>&nbsp;Apple</label>
      							<br />
      							<input type='checkbox' id='chk3' tabindex='2' /> <label for='chk3'>&nbsp;Oppo</label>
      							<br />
      							<input type='checkbox' id='chk4' tabindex='3' /> <label for='chk4'>&nbsp;Lenovo</label>
      						</div>
      						<div style={{ height: 10 }} />
      						<h5>Price Range</h5>
      						<select>
      							<option>0 - 1jt</option>
      							<option>1jt - 2jt</option>
      							<option>2jt - 3jt</option>
      							<option>3jt - 4jt</option>
      						</select>
      						<div style={{ height: 10 }} />
      						<h5>Screen Size</h5>
      						<select>
      							<option>15cm</option>
      							<option>20cm</option>
      						</select>
      					</form>
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
                {
                  this.state.products.length === 0 ? <div>loading...</div> : this.state.products.map((item, index) => {
                    return (
                      <div className='col-sm-12 col-md-6 col-lg-4' key={index}>
              					<div className='card fluid'>
              						<div className='section text-center'>
              							<img src={item.image} alt='' />
              							<h4>{item.product_name}<small>Rp. 3.500.000</small></h4>
              							<a href='#' className='button fnt-sz-s2'>Buy</a>
              						</div>
              					</div>
              				</div>
                    )
                  })
                }
      			</div>
      		</div>
      	</div>
      </div>
    )
  }
}

export default PhoneContent
