import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from './Header';
import Footer from './Footer';
import { setUserDetail } from '../actions'

class SignUp extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			registerErr: '',
			email: '',
			password1: '',
			password2: '',
			username: '',
			registerButton: true,
			fieldDisable: false,
			redirectLoginSuccess: false,
			wrongPassword: false,
			wrongUsername: false,
			isLogin: false
		}
	}

	setUsernameField(event) {
		this.setState({ username: event.target.value })
		if(event.target.value.length <= 3) {
			this.setState({
				wrongUsername: true
			})
		} else if(event.target.value.length >= 4) {
			this.setState({
				wrongUsername: false
			})
		}
	}
	setPassword1Field(event) {
		this.setState({ password1: event.target.value })
		if (this.state.password2 !== event.target.value) {
			this.setState({
				wrongPassword: true
			})
		} else {
			this.setState({
				wrongPassword: false
			})
		}
	}
	setPassword2Field(event) {
		this.setState({ password2: event.target.value })
		if (this.state.password1 !== event.target.value) {
			this.setState({
				wrongPassword: true
			})
		} else {
			this.setState({
				wrongPassword: false
			})
		}
	}
	setEmailField(event) {
		let email = event.target.value
		this.setState({ email: email })
	}

	registerButtonOnClick(event) {
		event.preventDefault()
		// show loading
		this.setState({ registerButton: true, disabled: true })
		axios.post('http://localhost:8000/auth/register/', this.state)
		.then(result => {
			axios.post('http://localhost:8000/api/userdetail/', {partnership: this.props.partner.id ? this.props.partner.id : null}, {
			  headers: {
			    Authorization: 'JWT ' + result.data.token
			  }
			})
			.then(response => {
				window.localStorage.setItem('userDetail', JSON.stringify(result.data))
				this.props.setUserDetail(response.data)
				console.log('FIIREEEE');
				this.setState({ redirectLoginSuccess: true })
			})
			.catch(err1 => {
				console.log('error while set register with partner', err1)
				this.setState({ registerErr: err1 })
			})
		})
		.catch(err => {
			this.setState({ registerErr: err })
		})
	}

	componentDidMount() {
		if (window.localStorage.length !== 0) {
      this.setState({
        isLogin: true
      })
    }
	}
	render() {
		if (this.state.redirectLoginSuccess && localStorage.getItem('product') !== null) {
			return <Redirect to='/loan-application' />
		} else if(this.state.redirectLoginSuccess) {
			return <Redirect to='/phone' />
		} else {
			return (
				<div>
					<Header />
					<div className="container" style={{ margin: '25px 0' }}>
						<div className="row">
							<div className="col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3 col-lg-4 col-lg-offset-4">
								<div className="panel-top">
									<h4 className="fnt-blue">Sign Up</h4>
								</div>
								<div className="panel-bottom">
									<form className="clean-form">
										<h5 className="fnt-grey">User Name</h5>
										<input type="text" className="input-full" onChange={event => this.setUsernameField(event)} disabled={this.state.fieldDisable} />
										{ this.state.wrongUsername ? <span style={{ color: 'red' }}>Username must min. 6 character</span> : <span></span> }
										<div className="form-spacer" />
										<h5 className="fnt-grey">Email</h5>
										<input type="text" className="input-full" onChange={event => this.setEmailField(event)} disabled={this.state.fieldDisable} />
										<div className="form-spacer" />
										<h5 className="fnt-grey">Type Password</h5>
										<input type="password" className="input-full" onChange={event => this.setPassword1Field(event)} disabled={this.state.fieldDisable} />
										<h5 className="fnt-grey">Re-type Password</h5>
										<input type="password" className="input-full" onChange={event => this.setPassword2Field(event)} disabled={this.state.fieldDisable} />
										{ this.state.wrongPassword ? <span style={{ color: 'red' }}>Password tidak cocok</span> : <span></span> }
										<div className="row" style={{ borderTop: '1px solid #eaeaea', margin: '1rem 0', paddingTop: '1rem' }}>
											<div className="col-sm-12 col-md-12 col-lg-12">
												<button className="tertiary input-full" onClick={(event) => this.registerButtonOnClick(event)}>Sign Up</button>
											</div>
										</div>
									</form>
									<div className="row" style={{ borderTop: '1px solid #eaeaea', margin: '1rem 0', paddingTop: '1rem' }}>
										<div className="col-sm-12 col-md-12 col-lg-12 text-center">
											<img src="img/facebook_login.png" alt="" />
										</div>
									</div>
									<div className="row" style={{ borderTop: '1px solid #eaeaea', padding: '1rem', backgroundColor: '#eee' }}>
										<div className="col-sm-12 col-md-12 col-lg-12 text-center">
											<Link to="/login" className="forgot-password fnt-sz-s1">
												Already have an account?
											</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<Footer />
				</div>
			)
		}
	}
}

const mapStateToProps = state => ({
	partner: state.partner
})

const mapDispatchToProps = dispatch => (
	bindActionCreators({ setUserDetail }, dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
