import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import State from "./redux/state";
import {BrowserRouter} from "react-router-dom";


ReactDOM.render(<React.StrictMode>

	<BrowserRouter>
		<App appState={State}/>
	</BrowserRouter>

</React.StrictMode>, document.getElementById('root'));
reportWebVitals();


