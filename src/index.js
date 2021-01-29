import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

document.addEventListener('DOMContentLoaded', () => {
    const targetNode = document.body.querySelector('.container');
    console.log(targetNode);
    ReactDOM.render(<App/>, targetNode);
});
