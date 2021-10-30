import React from 'react'
import './App.css';
import {Route} from "react-router-dom";
//TODO разобраться, почему подчёркивает Route
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";


const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header/>
			<Navbar/>
			<div className='content-wrapper'>

				<Route path='/profile' render={() =>
					<Profile store={props.store}/>
				}/>

				<Route path='/dialogs' render={() =>
					<Dialogs
						store={props.store}
						dialogsPage={props.state.dialogsPage}
						dispatch={props.dispatch}/>
				}/>

				<Route path='/news' component={News}/>
				<Route path='/music' component={Music}/>
				<Route path='/settings' component={Settings}/>

			</div>
		</div>
	);
}

export default App;
