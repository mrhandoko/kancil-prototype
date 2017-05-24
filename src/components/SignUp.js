import React from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import Header from './Header';
import Footer from './Footer';

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
		}
	}

	setUsernameField(event) {
		this.setState({ username: event.target.value })
	}
	setPassword1Field(event) {
		this.setState({ password1: event.target.value })
	}
	setPassword2Field(event) {
		this.setState({ password2: event.target.value })
	}
	setEmailField(event) {
		let email = event.target.value
		this.setState({ email: email })
	}

	componentWillUpdate(nextProps, nextState) {
		nextState.registerButton = !(nextState.email &&
			nextState.username &&
			nextState.password1 === nextState.password2 &&
			nextState.password1 !== '')
	}

	registerButtonOnClick(event) {
		event.preventDefault()
		// show loading
		this.setState({ registerButton: true, disabled: true })
		console.log(this.state);
		axios.post('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/auth/register/', this.state)
		.then(result => {
			console.log('whhhhhooooaaa');
			window.localStorage.setItem('userDetail', JSON.stringify(result))
			this.setState({ redirectLoginSuccess: true })
			console.log(result);
		})
		.catch(err => {
			this.setState({ registerErr: err })
		})
	}

	render() {
		if (this.state.redirectLoginSuccess) {
			return <Redirect to='/loan-application' />
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
										<div className="form-spacer" />
										<h5 className="fnt-grey">Email</h5>
										<input type="text" className="input-full" onChange={event => this.setEmailField(event)} disabled={this.state.fieldDisable} />
										<div className="form-spacer" />
										<h5 className="fnt-grey">Type Password</h5>
										<input type="password" className="input-full" onChange={event => this.setPassword1Field(event)} disabled={this.state.fieldDisable} />
										<h5 className="fnt-grey">Re-type Password</h5>
										<input type="password" className="input-full" onChange={event => this.setPassword2Field(event)} disabled={this.state.fieldDisable} />
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
											<a href className="forgot-password fnt-sz-s1">
												Already have an account?
											</a>
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

export default SignUp
