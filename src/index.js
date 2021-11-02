import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";

import App from "./App";
import store from "./redux/redux-store";
import StoreContext from "./store-context";



let rerenderEntireTree = (state) => {
	ReactDOM.render(<React.StrictMode>
		<BrowserRouter>
			<StoreContext.Provider value={store}>
				<App store={store}/>
			</StoreContext.Provider>
		</BrowserRouter>
	</React.StrictMode>, document.getElementById('root'));
}
rerenderEntireTree(store.getState());
store.subscribe(() => {
	let state = store.getState()
	rerenderEntireTree(state);
});

reportWebVitals();


