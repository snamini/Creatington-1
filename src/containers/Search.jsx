import React, {Component} from 'react';
import Header from '../components/Header';
import DisplayCard from '../components/DisplayCard';
import FloatBtn from '../components/FloatBtn';
import Pagination from '../components/Pagination';
import Footer from '../components/Footer';
import {Row, Col, CardPanel} from 'react-materialize';

class Search extends Component {
    render() {
        return (
            <div className="all">
                <div>
                    <Row>
                        <Col s={3} className="aboutme">
                            <CardPanel>
                                <Row>
                                    <Col s={12}>
                                        <h1>meow</h1>
                                    </Col>

                                    <Col s={12}>
                                        <h1>meow</h1>
                                    </Col>

                                    <Col s={12}>
                                        <h1>meow</h1>
                                    </Col>

                                    <Col s={12}>
                                        <h1>meow</h1>
                                    </Col>

                                    <Col s={12}>
                                        <h1>meow</h1>
                                    </Col>

                                    <Col s={12}>
                                        <h1>meow</h1>
                                    </Col>
                                    <Col s={12}>
                                        <h1>meow</h1>
                                    </Col>
                                </Row>
                            </CardPanel>
                        </Col>

                        <Col s={9} className="portfolio">
                            <CardPanel>
                                <Row>
                                    <Col s={3} className='card1'>
                                        <DisplayCard/>
                                    </Col>
                                    <Col s={3} className='card2'>
                                        <DisplayCard/>
                                    </Col>
                                    <Col s={3} className='card3'>
                                        <DisplayCard/>
                                    </Col>
                                    <Col s={3} className='card4'>
                                        <DisplayCard/>
                                    </Col>
                                    <Col s={3} className='card5'>
                                        <DisplayCard/>
                                    </Col>
                                    <Col s={3} className='card6'>
                                        <DisplayCard/>
                                    </Col>
                                    <Col s={3} className='card7'>
                                        <DisplayCard/>
                                    </Col>
                                    <Col s={3} className='card8'>
                                        <DisplayCard/>
                                    </Col>
                                    <Col s={3} className='card8'>
                                        <DisplayCard/>
                                    </Col>
                                    <Col s={3} className='card8'>
                                        <DisplayCard/>
                                    </Col>
                                    <Col s={3} className='card8'>
                                        <DisplayCard/>
                                    </Col>
                                    <Col s={3} className='card8'>
                                        <DisplayCard/>
                                    </Col>

                                </Row>
                            </CardPanel>
                                <Row>
                                    <Col s={7}></Col>
                                    <Col s={5}>
                                        <Pagination/>
                                    </Col>
                                </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

export default Search; // importing the component class from the react library import React, {Component}
