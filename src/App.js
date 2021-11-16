import React from 'react'
import {Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";

import './App.css';


const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='content-wrapper'>
				<Route path='/profile' render={() => <ProfileContainer />}/>
				<Route path='/dialogs' render={() => <Dialogs />}/>
				<Route path='/news' component={News}/>
				<Route path='/music' component={Music}/>
				<Route path='/users' render={() => <UsersContainer />}/>
				<Route path='/settings' component={Settings}/>
			</div>
		</div>
	);
}

export default App;
