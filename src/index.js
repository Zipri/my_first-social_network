import React from 'react';
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import reportWebVitals from './reportWebVitals';
import App from "./App";
import store from "./redux/redux-store";

import './index.css';


ReactDOM.render(<React.StrictMode>
	<BrowserRouter>

		<Provider store={store}>
			<App/>
		</Provider>

	</BrowserRouter>
</React.StrictMode>, document.getElementById('root'));


reportWebVitals();


