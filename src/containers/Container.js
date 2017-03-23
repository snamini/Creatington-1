 import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import styles from '../styles/styles.module.css'

export class Container extends React.Component {
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }

    return (
      <Jumbotron>
        <Header isLoggedIn={this.props.route.auth.loggedIn()}/>
        {children}
        <Footer/>
      </Jumbotron>
    )
  }
}

export default Container;


