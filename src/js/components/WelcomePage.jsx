import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import DotButton from './Accessories/Button';

class WelcomePage extends Component{
	_start() {
        console.log("You clicked me!")
        browserHistory.push('/dots');
    }
	
	render(){
		return(
			<DotButton _clickMe={this._start}/>
		)
	}

}

export default WelcomePage;