import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from "./render";
import State from "./redux/state";

rerenderEntireTree(State);
reportWebVitals();


