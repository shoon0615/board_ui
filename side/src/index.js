/* index.js */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Route, Routes 기능 사용 시 반드시 <BrowserRouter> 태그로 감싸야 사용 가능 -> 앱에서 단 하나의 라우터만 사용
import {BrowserRouter} from "react-router-dom";     // BrowserRouter: 브라우저 History API 를 사용해 현재 위치의 URL 저장
import Header from "./layout/Header";
import Footer from "./layout/Footer";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header/>
    <App/>
    <Footer/>
  </BrowserRouter>
);

// 기본 셋팅
/*
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/
