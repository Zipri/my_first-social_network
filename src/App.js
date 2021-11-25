import React from 'react'
import {Route} from "react-router-dom";

import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import UsersContainer from "./components/Users/UsersContainer";
import Settings from "./components/Settings/Settings";
import Login from "./components/Login/Login";

import './App.css';


const App = (props) => {
	return (
		<div className='app-wrapper'>
			<HeaderContainer/>
			<Navbar/>
			<div className='content-wrapper'>
				<Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
				<Route path='/dialogs' render={() => <Dialogs/>}/>
				<Route path='/news' component={News}/>
				<Route path='/music' component={Music}/>
				<Route path='/users' render={() => <UsersContainer/>}/>
				<Route path='/settings' component={Settings}/>
				<Route path='/login' render={() => <Login/>}/>
			</div>
		</div>
	);
}

export default App;
