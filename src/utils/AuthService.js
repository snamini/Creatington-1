import Auth0Lock from 'auth0-lock'
import { browserHistory } from 'react-router'
import axios from "axios"

export default class AuthService {
  constructor(clientId, domain) {
    // Configure Auth0
    this.lock = new Auth0Lock(clientId, domain, {
      auth: {
        redirectUrl: 'http://localhost:3000/login',
        responseType: 'token'
      }
    })
    // Add callback for lock `authenticated` event
    this.lock.on('authenticated', this._doAuthentication.bind(this))
    // binds login functions to keep this context
    this.login = this.login.bind(this)
  }

  _doAuthentication(authResult) {
    // Saves the user token. 
    this.setToken(authResult.idToken)
        console.log(authResult.idToken);
    // navigate to the home route

    // Async loads the user profile data
    this.lock.getProfile(authResult.idToken, (error, profile) => {
      if (error) {
        console.log('Error loading the Profile', error)
      } else {
        console.log(profile);
        this.setProfile(profile)
  
      }
    })
  }

  login() {
    // Call the show method to display the widget.
    console.log("Loging In");
    this.lock.show()
  }
    loggedIn() {
    // Checks if there is a saved token and it's still valid
     console.log(" Checking if loggedIn ");
    return !!this.getToken()
  }

  setProfile(profile){
    // Saves profile data to localStorage
     console.log("Setting profile here");
    localStorage.setItem('profile', JSON.stringify(profile))
    // Triggers profile_updated event to update the UI
    //this.emit('profile_updated', profile)
    axios.post("/portfolio", profile)
    .then(() => {
       console.log("Setting profile then");
     browserHistory.replace('/portfolio')       
    })
    .catch(()=>{
       console.log("Setting profile catch");
     browserHistory.replace('/portfolio')    
    })
    }

  getProfile(){
    // Retrieves the profile data from localStorage
     console.log("Getting profile");
    const profile = localStorage.getItem('profile')
    //console.log(profile)
    return profile ? JSON.parse(localStorage.profile) : {}
  }

  setToken(idToken) {
    // Saves user token to local storage
     console.log("Setting token");
    localStorage.setItem('id_token', idToken)
  }

  getToken() {
    // Retrieves the user token from local storage
     console.log("Getting token");
     console.log(localStorage.getItem('id_token'));
    return localStorage.getItem('id_token')
  }

  logout() {
    // Clear user token and profile data from local storage
    console.log("Logging Out");
    localStorage.removeItem('id_token');

  }
}