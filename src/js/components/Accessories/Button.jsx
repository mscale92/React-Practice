import React, { Component } from 'react';
import { Link } from 'react-router';

class DotButton extends Component{
	
	render(){
		return(
			<div className="main-button">
				<button onClick={this.props._clickMe}>Click Me!</button>
			</div>
		)
	}

}

export default DotButton;

//this.props._clickMe exports the onClick function of the button
//This is useful for reusing a button in different components, namely for design and DRY code

//Once imported into the desired component, the user only needs to have the appropriate tag and
//function call to define the onClick event

//Example
//<DotButton _clickMe={this._start}/>

//this._start refers to a function declared in the desired component