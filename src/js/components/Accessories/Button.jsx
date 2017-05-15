import React, { Component } from 'react';
import { Link } from 'react-router';

class DotButton extends Component{
	_clickMe() {
		console.log("You clicked me!")
	}
	render(){
		return(
			<div className="main-button">
				<button onClick={this.props._clickMe}></button>
			</div>
		)
	}

}

export default DotButton;