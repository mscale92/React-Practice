var React = require('react');
var Link = require('react-router').Link;
// Don't forget your link if you want to create a constant hyperlink!


var Dots = React.createClass({
	getInitialState: function() {
		//Always set the initial state, even if it's just an empty object in order to prevent errors!
		//In this instance, we need a value for our variable, specifically a string value for our url. Lets just go with zero!
		return { dotColorUrl: ""};
	},
	componentWillMount: function(){
		//Component will mount only runs once, since the dots will redirect to the same page, well, we only need to mount, not remount, or update ;)
		//It's sometimes nice not to have to make an AJAX call, or count for that matter, just refresh


		//The point of the dots page is to have a random dot color on the screen, what better way than a random
		//number generator! With values between 0-2, aka three possible values
		//Don't forget to trunc, rounds down to the nearest integer!
		var randomNumForColors = Math.floor(Math.random() * 3);
		var nameOfColor = "";
		var dotImgUrlString = "";

		//Here we set the color names! Our img urls are only different via the name of the color dot
		if(randomNumForColors == 0){
			nameOfColor = "red";
		}

		else if(randomNumForColors == 1){
			nameOfColor = "green";
		}

		else{
			nameOfColor = "blue";
		}

		dotImgUrlString = "/files/imgs/" + nameOfColor + "_dot.jpg";
		console.log(dotImgUrlString, "img url string");

		//Once we have our value, let's set it in our state!
		this.setState({
			dotColorUrl : dotImgUrlString
		});

	},
	render: function() {
		return (
			<div className="dots-page">
				<h2>Go go go</h2>
				<h3>Click the Dot!</h3>
				<a href="/dots"><img src={this.state.dotColorUrl} alt="big dot"/></a>
			</div>
		);
	}
});

module.exports = Dots;