import React from 'react';
import {Pagination} from 'react-materialize';

export default class MyPagination extends React.Component {
  render(){
    return (
      <Pagination items={10} activePage={2} maxButtons={8}/>
    );
  }
}
