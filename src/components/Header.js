import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class Header extends React.Component {
	constructor() {
		super();
		this.state = {
			isLogin: false,
			isLogout: false,
			username: '',
		};
	}
	logout() {
		window.localStorage.removeItem('user');
		window.localStorage.removeItem('product');
		this.state({
			isLogin: false,
			isLogout: true,
		});
	}
	componentWillMount() {
		// let setUser = window.localStorage.getItem('userDetail')
		// if (setUser !== null) {
		// 	let userJson = JSON.parse(setUser)
		// 	axios
		// 		.post('http://kancil-dev.ap-southeast-1.elasticbeanstalk.com/auth/verify', { token: userJson.token })
		// 		.then(result => {
		// 			if (result.data.token === userJson.token) {
		// 				this.props.setUserData(result.data)
		// 			} else {
		// 				console.log('something wong', result)
		// 			}
		// 		})
		// 		.catch(err => {
		// 			console.log(err)
		// 		})
		// }
		if (window.localStorage.getItem('user') !== null) {
			if (window.localStorage.length !== 0 && JSON.parse(localStorage.getItem('user')).user.username.length > 0) {
				this.setState({
					isLogin: true,
					username: JSON.parse(localStorage.user).user.username,
				});
			}
		}
	}
	render() {
		if (this.state.isLogout) {
			return <Redirect to="/Home" />;
		}
		return (
			<header className="sticky">
				<div className="row">
					<div className="col-sm-7 col-md-3 col-md-offset-1 col-lg-4 col-lg-offset-2">
						<img src={require('../assets/images/logo/top_logo.png')} className="top-logo" alt="" />
					</div>
					<div className="align-right col-sm-5 col-md-7 col-lg-4">
						<nav className="hidden-sm">
							<Link to="/">Home</Link>
							<Link to="/phone">Phones</Link>
							<Link to="/faq">FAQ</Link>
							{
								this.state.isLogin ? <a>Selamat Datang, {this.state.username}</a> : <Link to="/signup"><b>Daftar</b></Link>
							}
							{
								localStorage.getItem('product') && <Link to="/loan-application"><b>Loan Application</b></Link>
							}
							{
								this.state.isLogin ? <Link onClick={() => this.logout()} to="/" style={{ cursor: "pointer" }}>Logout</Link> : <Link to="/login"><b>Login</b></Link>
							}
						</nav>
					</div>
				</div>
			</header>
		);
	}
}

export default Header;
