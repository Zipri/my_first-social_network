import React, {Suspense, useEffect} from 'react';
import {Redirect, Route, Switch, withRouter} from "react-router-dom";
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


const App = (props) => {
    useEffect(() => {
        props.initializeAppThunkCreator()
        window.addEventListener("unhandledrejection", catchAllUnhandledErrors)
        return () => window.removeEventListener("unhandledrejection", catchAllUnhandledErrors)
        //^ =componentWillUnmount
    }, [])
    //^ =componentDidMount
    const catchAllUnhandledErrors = (promiseRejectionEvent) => {
        // alert("Ooops, here is some error: " + promiseRejectionEvent.reason.message)
        console.log(promiseRejectionEvent)
    } //TODO сделать отдельную компоненту для ошибко (с крестиков всплывашка и таймаутом), текст ошибки можно хранить в голбал стейт
    //TODO добавить кнопку имитацю ошибки
    if (!props.initialized) return <Preloader/>
    return <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <Suspense fallback={<div>Загрузка...</div>}>
            <div className='content-wrapper'>
                <Switch>
                    <Route exact path='/'
                           render={() => <Redirect to="/profile" />}/>
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
                    <Route path='*'
                           render={() => <h1>404 Page not found</h1>}/>
                </Switch>
            </div>
        </Suspense>
    </div>

}

const mapStateToProps = (state) => ({
    initialized: getInitialized(state)
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeAppThunkCreator})
)(App);
