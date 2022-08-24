import React, {Suspense} from 'react';
import {Route, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

import Preloader from "./components/common/Preloader/Preloader";
import {initializeAppThunkCreator} from "./redux/app-reducer";
import {getInitialized} from "./redux/getters-selectors";

import './App.css';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const Login = React.lazy(() => import('./components/Login/Login'));


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
                <Suspense fallback={<div>Загрузка...</div>}>
                    <div className='content-wrapper'>
                        <Route path='/profile/:userId?'
                               render={() => <Profile/>}/>
                        <Route path='/dialogs'
                               render={() => <Dialogs/>}/>
                        <Route path='/news'
                               render={() => <News/>}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/settings'
                               render={() => <Settings/>}/>
                        <Route path='/login'
                               render={() => <Login/>}/>
                    </div>
                </Suspense>
            </div>
        )
            ;
    }
}

const mapStateToProps = (state) => ({
    initialized: getInitialized(state)
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeAppThunkCreator})
)(App);
