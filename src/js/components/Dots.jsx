var React = require('react');
var Link = require('react-router').Link;
// Don't forget your link if you want to create a constant hyperlink!


var Dots = React.createClass({
	render: function() {
		return (
			<div className="dots-page">
				<h2>Go go go</h2>
			</div>
		);
	}
});

module.exports = Dots;