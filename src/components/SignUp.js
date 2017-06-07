import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import { setUserDetail, loginRequest } from '../actions';

class SignUp extends React.Component {
	constructor(props) {
		super(props);
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
			isLogin: false,
			validEmail: true,
		};
	}
	setUsernameField(event) {
		this.setState({ username: event.target.value });
		if(event.target.value.length <= 3) {
			this.setState({
				wrongUsername: true,
			})
		} else if(event.target.value.length >= 6) {
			this.setState({
				wrongUsername: false,
			});
		}
	}
	setPassword1Field(event) {
		const regex = /(?=.*\d)(?=.*[a-z]).{6,}/g;
    if(regex.test(event.target.value)) {
			this.setState({ password1: event.target.value });
			if (this.state.password2 !== event.target.value) {
				this.setState({
					wrongPassword: true,
				});
			} else {
				this.setState({
					wrongPassword: false,
				});
			}
		}
	}
	setPassword2Field(event) {
		const regex = /(?=.*\d)(?=.*[a-z]).{6,}/g;
    if(regex.test(event.target.value)) {
			this.setState({ password2: event.target.value });
			if (this.state.password1 !== event.target.value) {
				this.setState({
					wrongPassword: true,
				});
			} else {
				this.setState({
					wrongPassword: false,
				});
			}
		} else {
			this.setState({
				wrongPassword: false,
			});
		}
	}
	setEmailField(event) {
		let email = event.target.value
		const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(email)) {
			this.setState({
				email: email,
				validEmail: true,
			});
		} else {
			this.setState({
				validEmail: false,
			});
		}
	}

	registerButtonOnClick(event) {
		event.preventDefault()
		// show loading
		this.setState({ registerButton: true, disabled: true })
		axios.post('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/auth/register/', this.state)
		.then(result => {
			if (result.data.user.email === this.state.email) {
				this.props.loginRequest(result.data.user.email, this.state.password1)
			}
			axios.post('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/api/userdetail/', {partnership: this.props.partner.id ? this.props.partner.id : 3}, {
			  headers: {
			    Authorization: 'JWT ' + result.data.token
			  }
			})
			.then(response => {
				window.localStorage.setItem('userDetail', JSON.stringify(result.data))
				this.props.setUserDetail(response.data)
				this.setState({ redirectLoginSuccess: true })
			})
			.catch(err1 => {
				this.setState({ registerErr: err1 })
			})
		})
		.catch(error => {
			this.setState({
				registerErr: error.response.data
			})
		})
	}

	displayErr() {
		return Object.keys(this.state.registerErr).map(key => (
			<li key={key} style={{ color: "red" }}><mark className="secondary">{this.state.registerErr[key]}</mark></li>
		))
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
		}
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
									{ this.state.wrongUsername && <mark className="secondary clean-list">Username harus minimal 6 karakter</mark> }
									<div className="form-spacer" />
									<h5 className="fnt-grey">Email</h5>
									<input type="text" className="input-full" onChange={event => this.setEmailField(event)} disabled={this.state.fieldDisable} />
									{ !this.state.validEmail && <mark className="secondary clean-list">Format Email salah</mark>}
									<div className="form-spacer" />
									<h5 className="fnt-grey">Type Password</h5>
									<input type="password" className="input-full" onChange={event => this.setPassword1Field(event)} disabled={this.state.fieldDisable} />
									<h5 className="fnt-grey">Re-type Password</h5>
									<input type="password" className="input-full" onChange={event => this.setPassword2Field(event)} disabled={this.state.fieldDisable} />
									<div className="fnt-grey" style={{ fontSize: 10 }}>Kombinasi password harus dengan huruf & angka dan minimal 8 karakter</div>
									{ this.state.wrongPassword && <mark className="secondary clean-list">Password tidak cocok</mark> }
									<div className="row" style={{ borderTop: '1px solid #eaeaea', margin: '1rem 0', paddingTop: '1rem' }}>
										<div className="col-sm-12 col-md-12 col-lg-12">
											{this.state.registerErr === '' ? <b /> : <ul className="clean-list">{ this.displayErr() }</ul>}
											<button className="tertiary input-full" onClick={(event) => this.registerButtonOnClick(event)}>Sign Up</button>
										</div>
									</div>
								</form>
								{/* <div className="row" style={{ borderTop: '1px solid #eaeaea', margin: '1rem 0', paddingTop: '1rem' }}>
									<div className="col-sm-12 col-md-12 col-lg-12 text-center">
										<img src="img/facebook_login.png" alt="" />
									</div>
								</div> */}
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
		);
	}
}

const mapStateToProps = state => ({
	partner: state.partner,
});

const mapDispatchToProps = dispatch => (
	bindActionCreators({ setUserDetail, loginRequest }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
