/*React programs start with the app.js file. This is where all the components routes will be determined
In fact, using ReactRouter enables browser history as well as pathes for the components*/

//Deprecated format below, aka es5
// var React = require('react');
// var ReactDOM = require('react-dom');
// var ReactRouter = require('react-router');

import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

// var Router = ReactRouter.Router;
// var Route = ReactRouter.Route;
// var IndexRoute = ReactRouter.IndexRoute;

/*Import the components from their file locations*/ 
// import Menu from './components/Global/Menu.jsx';

import App from './components/App';
import Dots from './components/Dots';
import WelcomePage from './components/WelcomePage';

// var App = require('./components/App');
// var Dots = require('./components/Dots');


const routes = (
	<Router history={browserHistory}>
        <Route path="/" component={App}>
        	<IndexRoute component={WelcomePage}/>
        	<Route path="/dots" component={Dots}/>
        </Route>
    </Router>
);

// Render the DOM here with the ReactDom.render command,
//routes refers to all of our component routes, it's much easier, and cleaner, to simply write a variable
//that contains all of them rather than shove all of them in the ReactDom.Render

ReactDOM.render(routes, document.getElementById('app'));

//npm run dev, that's how you trigger webpack. Do this, otherwise react won't render!

