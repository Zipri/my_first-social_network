import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from "./App";
import Store from "./redux/state";



let rerenderEntireTree = (state) => {
	ReactDOM.render(<React.StrictMode>
		<BrowserRouter>
			<App
				state={state}
				dispatch={Store.dispatch.bind(Store)}/>
		</BrowserRouter>
	</React.StrictMode>, document.getElementById('root'));
}
rerenderEntireTree(Store.getState());
Store.subscribe(rerenderEntireTree)

reportWebVitals();


