import React from 'react';
import ReactDOM from "react-dom";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";

import reportWebVitals from './reportWebVitals';
import App from "./App";
import store from "./redux/redux-store";

import './index.css';


ReactDOM.render(<React.StrictMode>
	<HashRouter> {/*deploy on gh-pages*/}

		<Provider store={store}>
			<App/>
		</Provider>

	</HashRouter>
</React.StrictMode>, document.getElementById('root'));

reportWebVitals();


