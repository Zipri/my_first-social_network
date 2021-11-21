import React from 'react';
import {connect} from "react-redux";

import Header from "./Header";
import {getAuthMeThunkCreator} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.getAuthMeThunkCreator()
	}

	render() {
		return <Header {...this.props} />
	}
};

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login
});

export default connect(mapStateToProps, {getAuthMeThunkCreator})(HeaderContainer);