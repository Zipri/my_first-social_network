import ReactDOM from "react-dom";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost} from "./redux/state";

export let rerenderEntireTree = (State) => {
	ReactDOM.render(<React.StrictMode>
		<BrowserRouter>
			<App
				appState={State}
				addPost={addPost}
			/>
		</BrowserRouter>
	</React.StrictMode>, document.getElementById('root'));
}
