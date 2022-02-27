import React from 'react';
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";

import Preloader from "./components/common/Preloader/Preloader";
import {initializeAppThunkCreator} from "./redux/app-reducer";
import {getInitialized} from "./redux/getters-selectors";

import './App.css';
import Profile from "./components/Profile/Profile";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunkCreator()
    }

    render() {
        if (!this.props.initialized) return <Preloader/>
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='content-wrapper'>
                    <Route path='/profile/:userId?' render={() => <Profile/>}/>
                    <Route path='/dialogs' render={() => <Dialogs/>}/>
                    <Route path='/news' component={News}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/login' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: getInitialized(state)
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeAppThunkCreator})
)(App);
