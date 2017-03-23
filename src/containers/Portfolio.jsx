// importing the component class from the react library
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AuthService from '../utils/AuthService'
import './Portfolio.css';
import ProfileDetails from '../components/ProfileDetails' 
import  { PropTypes as T } from 'react'
import {CardPanel, Collection, Input, Row, Col, CollectionItem, Collapsible, CollapsibleItem, Icon, Home} from 'react-materialize';
import PortfolioCard from '../components/PortfolioCard';
import StatusPost from '../components/StatusPost';
import AboutMe from '../components/AboutMe';
import Pagination from '../components/Pagination';
import CoverPhoto from '../components/CoverPhoto';
import Bookme from '../components/Bookme';
import EditProfile from '../components/EditProfile';
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
          <Header/>
          <div>
              <Row>
                  <Col s={12}>
                      <CoverPhoto/>
                  </Col>
              </Row>
              <Row>
                  <Col s={3} className="aboutme">
                      <CardPanel>
                          <Row>
                          <EditProfile />
                              <Col s={12}>
                                  <AboutMe/>
                              </Col>
                              <Col s={1}></Col>
                              <Col s={11}>
                                  <Bookme/>
                              </Col>
                          </Row>
                          <Row>
                            <Col s={7}>
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
                  <Col s={9} className="portfolio">
                    <CardPanel>
                      <Row>
                        <Col s={12}>
                          <StatusPost/>
                        </Col>
                        <Col s={12}>
                          <PortfolioCard/>
                        </Col>

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
            <Footer/>
          </div>
          );
      }
  }

  export default Portfolio;
