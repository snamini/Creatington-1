import React from 'react';
//import { Input} from 'react-materialize';

export default class SearchBar extends React.Component {
  render(){
    return (

 <nav>
   <div className="nav-wrapper">
     <form>
       <div className="input-field">
         <input id="search" type="search" required/>
         <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
         <i className="material-icons">close</i>
       </div>
     </form>
   </div>
 </nav>

);
}
}


// {/* // components/Search.jsx
// // buildSearchResults() {
// //     return this.props.searchResults.map((result) => {
// //         return <li>{result.name}</li>
// //     });
// // }
// // render() {
// //     return <div>
// //         <Input value={this.props.value} onChange={this.props.onChange}>
// //         <ul>
// //             {this.buildSearchResults()}
// //         </ul>
// //       </Input>
// //     </div>;
// // }
// // */}
