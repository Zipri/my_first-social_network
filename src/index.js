import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from "./App";
import Store from "./redux/store";
import store from "./redux/redux-store";



let rerenderEntireTree = (state) => {
	ReactDOM.render(<React.StrictMode>
		<BrowserRouter>
			<App
				state={state}
				dispatch={store.dispatch.bind(store)}/>
		</BrowserRouter>
	</React.StrictMode>, document.getElementById('root'));
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
	let state = store.getState()
	rerenderEntireTree(state);
});

reportWebVitals();


