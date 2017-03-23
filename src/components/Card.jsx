import React from 'react';
import { Card, CardTitle} from 'react-materialize';

export default class MyCard extends React.Component {
  render(){
    return (
		<Card className='small'
		  header={<CardTitle image='assets/sample-1.jpg'></CardTitle>}
		  actions={[<a key="link" href='#'>see more</a>]}>
		  meow meow meow
		</Card>
	);
}
}
