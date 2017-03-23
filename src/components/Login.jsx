import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../utils/AuthService'
import styles from '../styles/styles.module.css'

export class LoginOne extends React.Component {
  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    console.log(auth)
    return (
            <div>
{/*-------------------------Register Section------------------*/}      
      <div className={styles.root}>
        <h2>Login </h2>
        <ButtonToolbar className={styles.toolbar}>
          <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login or Register</Button>
        </ButtonToolbar>
      </div>
                </div>
    )
  }
}

export default LoginOne;


