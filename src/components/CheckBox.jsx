import React from 'react';
import {Row, Input} from 'react-materialize';

export default class CheckBox extends React.Component {
  render(){
    return (
      <Row>
          <Input name='group1' type='checkbox' value='red' label='Hip-Hop' />
          <Input name='group1' type='checkbox' value='red' label='R&B' />
          <Input name='group1' type='checkbox' value='red' label='Jazz' />
          <Input name='group1' type='checkbox' value='red' label='Classical' />
          <Input name='group1' type='checkbox' value='red' label='Electronic' />
          <Input name='group1' type='checkbox' value='red' label='Rock' />
          <Input name='group1' type='checkbox' value='red' label='Alternative' />
          <Input name='group1' type='checkbox' value='red' label='Punk' />
          <Input name='group1' type='checkbox' value='red' label='Swing' />
          <Input name='group1' type='checkbox' value='red' label='Bluegrass' />
          <Input name='group1' type='checkbox' value='red' label='Acoustic' />
          <Input name='group1' type='checkbox' value='red' label='Pop' />
      </Row>

);
}
}
