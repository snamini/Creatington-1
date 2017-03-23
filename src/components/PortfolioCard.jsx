
import React from 'react';
import { Card, CardTitle} from 'react-materialize';

export default class MyCard extends React.Component {
  render(){
    return (

      <div id="profile-page-wall-post" className="card">
        <div className="card-profile-title">
          <div className="row">
            <div className="col s4">
              <img src="assets/sample-1.jpg" alt="" className="circle responsive-img width=5% height=5%"/>
            </div>
            <div className="col s8">
              <p className="grey-text text-darken-4 margin">John Doe</p>
              <span className="grey-text text-darken-1 ultra-small">Shared publicly  -  26 Jun 2015</span>
            </div>
            <div className="col s1 right-align">
              <i className="mdi-navigation-expand-more"></i>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <p>I am a very simple wall post. I am good at containing <a href="#">#small</a> bits of <a href="#">#information</a>.  I require little more information to use effectively.</p>
            </div>
          </div>
        </div>
        <div className="card-image profile-medium">
          <div className="video-container no-controls">
            <iframe width="640" height="360" src="https://www.youtube.com/embed/10r9ozshGVE"  ></iframe>
          </div>
          <span className="card-title">Card Title</span>
        </div>
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
        </div>
        <div className="card-action row">
          <div className="col s4 card-action-share">
            <a href="#">Like</a>
            <a href="#">Share</a>
          </div>
          <div className="input-field col s8 margin">
            <input id="profile-comments" type="text" className="validate margin" />
            <label htmlFor="profile-comments" className="">Comments</label>
          </div>
        </div>
      </div>

    );
  }
}
