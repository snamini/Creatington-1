import React from 'react';
import './SearchBS.css';
import { Row, Col, Input, Icon, Dropdown, Button } from 'react-materialize';
// import LoginOne from "./Login"

var style = {
	color: '#FFF'
}

export default class SearchBS extends React.Component {
  render(){
    return (
    	<div className="banner-search">
    	<Row>
    	<Col s={6}>
<form>
       <div className="input-field">
         <input id="search" type="search" placeholder="Search by location" required/>
         <label className="label-icon" for="search"><i className="material-icons">search</i></label>

       </div>
       <Row>
                        <Col s={4} className='genres'>
                          <Dropdown trigger={<Button>Genres<Icon right>arrow_drop_down</Icon></Button>}>
                              <Row>
                                  <Input name='group1' type='checkbox' value='red' label='Hip-Hop' />
                                  <Input name='group2' type='checkbox' value='red' label='R&B' />
                                  <Input name='group3' type='checkbox' value='red' label='Jazz' />
                                  <Input name='group4' type='checkbox' value='red' label='Classical' />
                                  <Input name='group5' type='checkbox' value='red' label='Electronic' />
                                  <Input name='group6' type='checkbox' value='red' label='Rock' />
                                  <Input name='group7' type='checkbox' value='red' label='Alternative' />
                                  <Input name='group8' type='checkbox' value='red' label='Punk' />
                                  <Input name='group9' type='checkbox' value='red' label='Swing' />
                                  <Input name='group10' type='checkbox' value='red' label='Bluegrass' />
                                  <Input name='group11' type='checkbox' value='red' label='Acoustic' />
                                  <Input name='group12' type='checkbox' value='red' label='Pop' />
                              </Row>
                            </Dropdown>
                         </Col>
                         <Col s={3} className='followers'>
                           <Button waves='light'>followers</Button>
                         </Col>
                         </Row>
                         <Col s={10}>
       <button className="btn btn-success">Find Now</button>
       </Col>
     </form>

        </Col>
        <Col s={4} offset='s1' className="joinCol">
        	<p style={style}>Join now and get updated with all new artists</p>
          <button className="btn btn-info" data-toggle="modal" data-target="#loginpop">Login</button>
        </Col>
        </Row>
        </div>
    )
}
}    

