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
    <Input label="Mission" s={12} />
    <Input label="Background" s={6} />
    <Input label="Genre" s={6} />
    <Input s={6} label="Location"  />
    <Input label="Inspiration" s={12} />
    <Input label="Favorite Festivals" s={12} />
</Row>
</Modal>

		)
	}
}
