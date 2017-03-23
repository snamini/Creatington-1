// importing the component class from the react l ibrary
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';
import './Home.css';
import { Row, Col, Input, Icon, Dropdown, Button, Slide} from 'react-materialize';
import Slider from '../components/Slider';
import SearchBS from '../components/SearchBS';
import FeaturedArtists from '../components/FeaturedArtists';
import DisplayCard from '../components/DisplayCard';
import FloatBtn from '../components/FloatBtn';
import Pagination from '../components/Pagination';
import Login from "../components/Login";

// then we use that component class that we just imported to make our special components
// // Home inherited a bunch of things from the component
class Home extends Component {
    render() {
        return (

                    <div>
                      <h1 className="title">Creatington</h1>
                      <Login auth={this.props.auth}/>                      
                      <Slider />

                      <Row>
                         <Col s={12} className='search-bar'>
                          <SearchBS />
                        </Col>
                      </Row>

{/*-------------------------Card Section------------------*/}
                      <h1>FeaturedArtists</h1>
                      <FeaturedArtists />

            </div>


        );
    }
}

export default Home;

// how are these components used? must make sure the app knows about them. so we import them in Routes.jsx
