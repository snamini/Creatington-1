  // importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import AuthService from '../utils/AuthService'
import './Portfolio.css';

import  { PropTypes as T } from 'react'
//import styles from '../styles/styles.module.css'
import ProfileDetails from '../components/ProfileDetails'   
        
import { Row, Col, CardPanel} from 'react-materialize';
import { Input} from 'react-materialize';
import { Chip, Icon, Button, NavItem, CollectionItem, Collection, Collapsible, CollapsibleItem} from 'react-materialize';
import PortfolioCard from '../components/PortfolioCard';
import StatusPost from '../components/StatusPost';
import AboutMe from '../components/AboutMe';
import Pagination from '../components/Pagination';
import CoverPhoto from '../components/CoverPhoto';

// then we use that component class that we just imported to make our special components
// // portfolio inherited a bunch of things from the component
class Portfolio extends Component {
    static contextTypes = {
    router: T.object
  }
static propTypes = {
    auth: T.instanceOf(AuthService)
  }

constructor(props, context) {
 // console.log(props); //pbject
  // console.log(context);
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    // props.auth.on('profile_updated', (newProfile) => {
    //   this.setState({profile: newProfile})
    // })
  }

   logout(){
    this.props.auth.logout()
    this.context.router.push('/login');
  }

  render(){
        const { profile } = this.state
        return (
          
            <div className="all">
          <div>
              <Row>
                  <Col s={12}>
                      <ProfileDetails profile={profile}></ProfileDetails>
                  </Col>
              </Row>
              <Row>
                  <Col s={4} className="aboutme">
                        <Button onClick={this.logout.bind(this)}>Logout</Button>
                      <CardPanel>
                          <Row>
                              <Col s={12}>
                                  <AboutMe/>
                              </Col>
                          </Row>
                          <Row>
                            <Col s={7}>
                               <div>

                            </div>
                              <h1>meow</h1>
                            </Col>
                            <Col s={5}>
                              <h1>meow</h1>
                            </Col>
                          </Row>
                          <Row>
                              <Col s={12}>
                                  <h1>meow</h1>
                              </Col>
                          </Row>
                          <Row>
                              <Col s={12}>
                                  <h1>meow</h1>
                              </Col>
                          </Row>
                          <Row>
                            <Col s={12}>
                              <h1>meow</h1>
                            </Col>
                          </Row>
                          <Row>
                              <Col s={12}>
                                  <h1>meow</h1>
                              </Col>
                          </Row>
                          <Row>
                              <Col s={12}>
                                  <h1>meow</h1>
                              </Col>
                          </Row>
                      </CardPanel>
                  </Col>
                  <Col s={8} className="portfolio">
                    <CardPanel>
                      <Row>
                        <Col s={12}>
                          <StatusPost/>
                        </Col>
                      </Row>
                      <Row>
                        <Col s={12}>
                          <PortfolioCard/>
                        </Col>
                      </Row>
                      <Row>
                        <Col s={12}>
                          <PortfolioCard/>
                        </Col>
                      </Row>
                      <Row>
                        <Col s={12}>
                          <PortfolioCard/>
                        </Col>
                      </Row>
                    </CardPanel>
                  </Col>
              </Row>
              <Row>
                <Col s={9}></Col>
                <Col s={3}>
                  <Pagination/>
                </Col>
              </Row>
            </div>
          </div>



        );
    }
}

export default Portfolio;




// how are these components used? must make sure the app knows about them. so we import them in Routes.jsx
