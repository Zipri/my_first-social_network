import React from 'react'
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
//TODO разобраться, почему подчёркивает Route
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

const profile = (props) => <Profile postsData={props.postsData}/>
const dialog = (props) =>
  <Dialogs
    dialogsData={props.dialogsData}
    messagesData={props.messagesData}
  />



const App = (props) => {
	return (
		<BrowserRouter>
			<div className='app-wrapper'>
				<Header/>
				<Navbar/>
				<div className='content-wrapper'>
					<Route path='/profile' render={() => profile(props)}/>
					<Route path='/dialogs' render={() => dialog(props)}/>
					<Route path='/news' component={News}/>
					<Route path='/music' component={Music}/>
					<Route path='/settings' component={Settings}/>
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
