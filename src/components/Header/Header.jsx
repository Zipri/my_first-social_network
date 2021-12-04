import React from 'react';
import {NavLink} from "react-router-dom";

import logo1 from "../../assets/logo1.gif";
import logo2 from "../../assets/logo2.gif";
import logo3 from "../../assets/logo3.gif";
import logo4 from "../../assets/logo4.gif";
import logout from  "../../assets/logout.png"

import s from './Header.module.css';

const LogoutButton = (props) => {
	return <div className={s.logoutB}>
		<img src={logout} onClick={props.logout}/>
	</div>
}

class Header extends React.Component {

	state = {
		logo: logo1
	}

	changeLogo = () => {
		switch (this.state.logo) {

			case logo1:
				return this.setState({logo: logo2})
			case logo2:
				return this.setState({logo: logo3})
			case logo3:
				return this.setState({logo: logo4})
			case logo4:
				return this.setState({logo: logo1})

			default:
			 	return this.setState({logo: 1})
		}
	}

	render() {
		return <header className={s.header}>
			<img onClick={this.changeLogo} src={this.state.logo}/>
			{this.props.isAuth && <LogoutButton logout={this.props.logout}/>}
			<div className={s.loginBlock}>
				{this.props.isAuth
					? this.props.login
					: <NavLink to="/login">Login</NavLink>}
			</div>
		</header>

	}
};

export default Header;