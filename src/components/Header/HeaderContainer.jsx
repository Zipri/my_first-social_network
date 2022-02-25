import React from 'react';
import {connect} from "react-redux";

import Header from "./Header";
import {logoutThunkCreator} from "../../redux/auth-reducer";
import {getIsAuth, getLogin} from "../../redux/getters-selectors";

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} logout={this.props.logoutThunkCreator}/>
    }
};

let mapStateToProps = (state) => ({
    isAuth: getIsAuth(state),
    login: getLogin(state)
});

export default connect(mapStateToProps, {logoutThunkCreator})(HeaderContainer);