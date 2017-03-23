import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../utils/AuthService'
import styles from '../styles/styles.module.css'

const auth = new AuthService('52U7LZuyd6wsDLBHtVDBbLogIfh9dDNB', 'volskaia.auth0.com');

export class LoginOne extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    console.log(auth)
    return (   
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login or Register</Button>
    )
  }
}

export default LoginOne;




