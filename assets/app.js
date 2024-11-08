import './bootstrap.js';
import './styles/app.scss';

/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */

// loads the jquery package from node_modules
import $ from 'jquery';
import * as Turbo from '@hotwired/turbo';
import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './components/Rating';
Turbo.start();

// import the function from greet.js (the .js extension is optional)
// ./ (or ../) means to look for a local file
import loginformValidator from './controllers/loginformValidator.js';
import administratorDashboard from './controllers/administratorDashboard.js';
import animalHandler from './controllers/animalHandler.js';
import repportLogs from './controllers/repportLogs.js';


$(document).ready(function () {
    loginformValidator();
    administratorDashboard();
    animalHandler();
    repportLogs();
    // $('body').prepend('<h1>' +  + '</h1>');
});

ReactDOM.render(<Rating />, document.getElementById('rating-value'));