var React = require('react');
var Link = require('react-router').Link;
// Don't forget your link if you want to create a constant hyperlink!


var Dots = React.createClass({
	getInitialState: function() {
		//Always set the initial state, even if it's just an empty object in order to prevent errors!
		//In this instance, we need a value for our variable, specifically a number value. Lets just go with zero!
		return { dotColorValue: 0};
	},
	componentWillMount: function(){
		//Component will mount only runs once, since the dots will redirect to the same page, well, we only need to mount, not remount, or update ;)

		//The point of the dots page is to have a random dot color on the screen, what better way than a random
		//number generator! With values between 0-2, aka three possible values
		//Don't forget to trunc, rounds down to the nearest integer!
		var randomNumForColors = Math.floor(Math.random() * 3);
		
		//Once we have our value, let's set it in our state!
		this.setState({
			dotColorValue : randomNumForColors
		});

	},
	render: function() {
		return (
			<div className="dots-page">
				<h2>Go go go</h2>
				<h3>{this.state.dotColorValue}</h3>
			</div>
		);
	}
});

module.exports = Dots;