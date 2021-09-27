import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData = [
	{id: 1, name: 'Антон'},
	{id: 2, name: 'Ангелина'},
	{id: 3, name: 'Кот'},
	{id: 4, name: 'Кирилл'},
	{id: 5, name: 'Яша'},
	{id: 6, name: 'Ъуъ'},
]
let messagesData = [
	{id: 1, message: 'first message'},
	{id: 2, message: 'Второе сообщение'},
	{id: 3, message: 'Powel nahoi'},
	{id: 4, message: 'प्रतीक मार्गनिराकरण करू शकत नाही'},
	{id: 5, message: 'مرحبا العالم'},
	{id: 6, message: 'Ъуъ'},
]
let postsData = [
	{id: 1, message: 'Hello world', likes: 4},
	{id: 2, message: '何かのいくつかの種類の性交の説明', likes: 300},
	{id: 3, message: 'Ебиссь оно конём', likes: 76},
	{id: 3, message: '.أنا أكره هذه العبارةა', likes: 13},
]

ReactDOM.render(<React.StrictMode>
	<App
    postsData={postsData}
    dialogsData={dialogsData}
    messagesData={messagesData}
  />
</React.StrictMode>, document.getElementById('root'));
reportWebVitals();


