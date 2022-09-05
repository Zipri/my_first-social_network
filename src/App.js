import React, {Suspense, useEffect} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Preloader from "./components/common/Preloader/Preloader";
import ErrorForm from "./components/common/ErrorForm/ErrorForm";

import {initializeAppThunkCreator, resetGlobalError} from "./redux/app-reducer";
import {getGlobalError, getInitialized} from "./redux/getters-selectors";

import './App.css';

const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Dialogs = React.lazy(() => import('./components/Dialogs/Dialogs'));
const FAQ = React.lazy(() => import('./components/FAQ/FAQ'));
const Login = React.lazy(() => import('./components/Login/Login'));


const App = (props) => {
    useEffect(() => {
        props.initializeAppThunkCreator()
    }, [])
    if (!props.initialized) return <Preloader/>
    return <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <Suspense fallback={<div>Загрузка...</div>}>
            <div className='content-wrapper'>
                <Switch>
                    <Route exact path='/'
                           render={() => <Redirect to="/profile"/>}/>
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>
                    <Route path='/dialogs'
                           render={() => <Dialogs/>}/>
                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/faq'
                           render={() => <FAQ/>}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                    <Route path='*'
                           render={() => <h1>404 Page not found</h1>}/>
                </Switch>
                {!!props.globalError && <ErrorForm error={props.globalError}
                                                   resetError={props.resetGlobalError}/>}
            </div>
        </Suspense>
    </div>

}

const mapStateToProps = (state) => ({
    initialized: getInitialized(state),
    globalError: getGlobalError(state)

})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeAppThunkCreator, resetGlobalError})
)(App);
