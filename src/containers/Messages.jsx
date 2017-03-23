import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Bookme from '../components/Bookme';

var style = {
  textAlign: "center"
}

// then we use that component class that we just imported to make our special components
// // Community inherited a bunch of things from the component
export default class Community extends React.Component {
  render(){
    return (
    <div>
{/*-------------------------Header------------------------*/}
{/*-------------------------Page Content------------------*/}
        
{/*-------------------------Card Section------------------*/}
            <div className="row">
                <div className="col s4" id="aboutme">
                  <h1>meow meow meow</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                     sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col s4" id="portfolio">
                    <h1>woof woof woof</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                       sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="col s4" id="bookme" style={style}>
                  <Bookme />
                </div>
            </div>
    </div>
    );
  }
}
