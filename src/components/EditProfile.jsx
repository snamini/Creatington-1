import React from 'react';
import { Modal, Button, Row, Input } from 'react-materialize';

var style = {
	marginLeft: "40px"
}

export default class MyEditProfile extends React.Component {
	render(){
		return(
			<Modal			
  header='Edit Profile'
  trigger={
    <Button style={style} waves='light'>Edit Profile</Button>
  }>

<Row>
    <Input s={6} label="First Name" />
    <Input s={6} label="Last Name" />
    <Input type="email" label="Email" s={6} />
    <Input s={6} label="Location"  />
    <Input type="password" label="password" s={12} />
    <Input label="Genres" s={12} />
    <Input label="Soundcloud link" s={12} />
    <Input label="Experience" s={12} />
</Row>
</Modal>
		)
	}
}