import React from 'react';
import { Card, CardTitle} from 'react-materialize';

export default class MyDisplayCard extends React.Component {
  render(){
    return (
      <Card header={<CardTitle reveal image={"assets/sample-1.jpg"} waves='light'/>}
         title="Card Title"
         reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
         <p><a href="#">This is a link</a></p>
      </Card>
    );
  }
}
