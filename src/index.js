// import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';
import { AppRegistry } from 'react-native';
import 'bootstrap/dist/css/bootstrap.css';
// import 'jquery';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.bundle';
// import 'react-bootstrap';


AppRegistry.registerComponent('app-react-template', () => App);
AppRegistry.runApplication('app-react-template', { initialProps: {}, rootTag: document.getElementById('root') });

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();