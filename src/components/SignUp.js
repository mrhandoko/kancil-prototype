import React from 'react'
import axios from 'axios'

import Header from './Header'
import Footer from './Footer'

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
			redirectLoginSuccess: false
		}
	}

	setUsernameField(e) {
		this.setState({ username: e.target.value })
	}
	setPassword1Field(e) {
		this.setState({ password1: e.target.value })
	}
	setPassword2Field(e) {
		this.setState({ password2: e.target.value })
	}
	setEmailField(e) {
		let email = e.target.value
		console.log('email', email)
		let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		if (re.test(email)) {
			this.setState({ email: email })
			return true
		} else {
			return false
		}
	}

	componentWillUpdate(nextProps, nextState) {
		nextState.registerButton = !(nextState.email &&
			nextState.username &&
			nextState.password1 === nextState.password2 &&
			nextState.password1 !== '')
	}

	registerButtonOnClick() {
		// show loading
		this.setState({ registerButton: true, disabled: true })
		axios
			.post('http://localhost:8080/auth/register', this.state)
			.then(result => {
				window.localStorage.setItem('userDetail', JSON.stringify(result))
			})
			.catch(err => {
				this.setState({ registerErr: err })
			})
	}

	render() {
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
									<input
										type="text"
										name
										className="input-full"
										onChange={this.setUsernameField.bind(this)}
										disabled={this.state.fieldDisable}
									/>
									<div className="form-spacer" />
									<h5 className="fnt-grey">Email</h5>
									<input
										type="text"
										className="input-full"
										onChange={this.setEmailField.bind(this)}
										disabled={this.state.fieldDisable}
									/>
									<div className="form-spacer" />
									<h5 className="fnt-grey">Phone Number</h5>
									<input type="text" className="input-full" />
									<div className="form-spacer" />
									<h5 className="fnt-grey">Password</h5>
									<input
										type="text"
										className="input-full"
										onChange={this.setPassword1Field.bind(this)}
										disabled={this.state.fieldDisable}
									/>
									<div className="form-spacer" />
									<h5 className="fnt-grey">Re-type Password</h5>
									<input
										type="text"
										className="input-full"
										onChange={this.setPassword2Field.bind(this)}
										disabled={this.state.fieldDisable}
									/>
									<div
										className="row"
										style={{
											borderTop: '1px solid #eaeaea',
											margin: '1rem 0',
											paddingTop: '1rem'
										}}
									>
										<div className="col-sm-12 col-md-12 col-lg-12">
											<button className="tertiary input-full">Sign Up</button>
										</div>
									</div>
								</form>
								<div
									className="row"
									style={{
										borderTop: '1px solid #eaeaea',
										margin: '1rem 0',
										paddingTop: '1rem'
									}}
								>
									<div className="col-sm-12 col-md-12 col-lg-12 text-center">
										<img src="img/facebook_login.png" alt="" />
									</div>
								</div>
								<div
									className="row"
									style={{
										borderTop: '1px solid #eaeaea',
										padding: '1rem',
										backgroundColor: '#eee'
									}}
								>
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

export default SignUp
