import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Header from './components/Header/Header'
import AppIndex from './components/Index/AppIndex'
import reportWebVitals from './reportWebVitals';
import Vote4Country from './components/Vote4Country/Vote4Country'
import Vote4Game from './components/Vote4Game/Vote4Game'
import Rate from './components/Rate/Rate'
import App from './App';
import Images from './components/Images/Images';


import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();