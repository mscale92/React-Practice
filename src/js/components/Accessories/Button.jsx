import React, { Component } from 'react';
import { Link } from 'react-router';

class DotButton extends Component{
	render(){
		return(
			<div className="main-button">
				<button onClick={this.props.clickMe}></button>
			</div>
		)
	}

}

export default DotButton;