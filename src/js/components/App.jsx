import React, { Component } from 'react';
import { Link } from 'react-router';
import DotButton from './Accessories/Button';

// Don't forget your link if you want to create a constant hyperlink!

/*
Ziad's notes

This is the layout component. It's displayed by the top-level Route
this.props.children will correspond to the current URL's component.

If the URL is only / then the IndexRoute's component will be the child (Search component)
If the URL is /user/:username then the User component will be displayed.
*/

/*Mary's notes
    How do we make a beautiful JSX file that combines JS and XML?
    Start with declaring a variable, aka your component class, first!

    Since we are in the App file, we will call the variable App.
    This needs to remain consistent, file names = component class variables, so that when importing and exporting components,
    nothing gets screwed up!

    After declaring our React class component, we need to have something to render in the DOM aka make our html tags!
    The render function holds all html elements

    So what's going on in the render? Well since this is our main page, we're just going to create a layout shell that will be applied across all other pages,
    these other pages are referred to as this.props.children.
    Our App is our root component or first parent component, this means that all other routes will start with the same html tags. 
    This is great for layouts! No need to repeat!! All other components within this Route will have the same header!
*/ 
class App extends Component{
    // The render declaration renders the html code, this is where all xml takes place in the JSX,
    //before the render function is where all the JS logic, like AJAX calls, calculations, etc, takes place
    //ALWAYS! remember to return your render, otherwise nothing will render.

    render() {
        return (
            <div className="main-page">
                <header className="main-header">
                    <h1>Lots of Dots</h1>
                </header>
                <main className="main-content">

                        {this.props.children}
                </main>
            </div>
        );
    }
};

// Export your component
export default App;


