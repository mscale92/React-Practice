import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
// Don't forget your link if you want to create a constant hyperlink!
import RandomNum from './Modules/random_num';


class Dots extends Component{
	constructor(props) {
    	super(props);
    	this.state = {
    		dotColorUrl: ""
    	}
	}
	// getInitialState: function() {
	// 	//Always set the initial state, even if it's just an empty object in order to prevent errors!
	// 	//In this instance, we need a value for our variable, specifically a string value for our url. Lets just go with zero!
	// 	return { dotColorUrl: ""};
	// },
	componentWillMount(){
		//Component will mount only runs once, since the dots will redirect to the same page, well, we only need to mount, not remount, or update ;)
		//It's sometimes nice not to have to make an AJAX call, or count for that matter, just refresh


		var dotStringUrl = RandomNum.colorOfDot()

		//Once we have our value, let's set it in our state!
		this.setState({
			dotColorUrl : dotStringUrl
		});

	}

	_dots(){
		//This was to be used in a Link tag but it still won't rerender the component. For now, I'll stick with an
		//anchor tag, TODO: Get Link to rerender the component
		browserHistory.push('/');
		browserHistory.push('/dots');
	}
	render() {
		return (
			<div className="dots-page">
				<h2>Go go go</h2>
				<h3>Click the Dot!</h3>
				<div className="container">
					<a href="/dots" className="pos1"><img src={this.state.dotColorUrl} alt="big dot"/></a>
				</div>
			</div>
		);
	}
}

export default Dots;