/*React programs start with the app.js file. This is where all the components routes will be determined
In fact, using ReactRouter enables browser history as well as pathes for the components*/


var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');


/*Import the components from their file locations*/ 
// import Menu from './components/Global/Menu.jsx';
var App = require('./components/App');


var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;


var routes = (
	<App />
);

// Render the DOM here with the ReactDom.render command,
//routes refers to all of our component routes, it's much easier, and cleaner, to simply write a variable
//that contains all of them rather than shove all of them in the ReactDom.Render
ReactDOM.render(
 routes,
  document.getElementById('app')
);

/*<Router history={ReactRouter.browserHistory}>
		<Route path="/" component={App}>
		</Route>
	</Router>*/ 