import React from 'react';
import { FloatBtn} from 'react-materialize';

export default class MyFloatBtn extends React.Component {
  render(){
    return (
      <div className="fixed-action-btn" >
        <a className="btn-floating btn-large">
          <i className="mdi-action-stars"></i>
        </a>
        <ul>
          <li><a href="css-helpers.html" className="btn-floating red"><i className="large mdi-communication-live-help"></i></a></li>
          <li><a href="app-widget.html" className="btn-floating yellow darken-1"><i className="large mdi-device-now-widgets"></i></a></li>
          <li><a href="app-calendar.html" className="btn-floating green"><i className="large mdi-editor-insert-invitation"></i></a></li>
          <li><a href="app-email.html" className="btn-floating blue"><i className="large mdi-communication-email"></i></a></li>
        </ul>
      </div>
    );
  }
}
