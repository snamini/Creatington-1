import React from 'react';
import { Route, IndexRoute } from 'react-router';

//import index from './index.js';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import Community from './containers/Community';
import Challenges from './containers/Challenges';
import Login from './containers/Login';
//Auth0
import AuthService from './utils/AuthService'
import Container from './containers/Container'
//import Home from './Home/Home'
//import Login from './Login/Login'

const auth = new AuthService('52U7LZuyd6wsDLBHtVDBbLogIfh9dDNB', 'volskaia.auth0.com');

// validate authentication for private routes
const requireAuth = (nextState, replace) => {

  if (!auth.loggedIn()) {
  	console.log(auth.loggedIn());
     replace({ pathname: '/login' })
  }
}
// this is an annonomous function. all it does is return a new route and the path to show.
// the component will be what we always want to show when going to page /, so App
// inside app, we will have index routes
// if we go to index of our website, it will open up the home component
export default () => {
	return <Route path="/"component={Container} auth={auth}>
 	   	<IndexRoute component={Home}/>
		<Route path="/portfolio"  onEnter={requireAuth} component={Portfolio} />
		<Route path="/community"   component={Community} />
		<Route path="/challenges"  component={Challenges} /> 
		<Route path="/Login" component={Login} />
	    <Route path="/home" component={Home}  />
	</Route>
};
