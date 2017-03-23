import React, { Component } from 'react';
import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Register from '../components/Register';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <h3>Current Page:</h3>
      {this.props.children}
      <Footer />
    </div>
    );
  }
}

export default App;
