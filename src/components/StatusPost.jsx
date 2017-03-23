import React from 'react';

var style1 ={width: "100%"}
var style2 = {right: "441px", left: "0px"}
var style3 ={display: "block"}
var style4 ={display: "none"}
var style5 ={display: "none"}

export default class MyStatusPost extends React.Component {
  render(){
    return (
      <div id="profile-page-wall-share" className="row">
                        <div className="col s12">
                          <ul className="tabs tab-profile z-depth-1 light-blue" style={style1}>
                            <li className="tab col s3"><a className="white-text waves-effect waves-light active" href="#UpdateStatus"><i className="mdi-editor-border-color"></i> Update Status</a>
                            </li>
                            <li className="tab col s3"><a className="white-text waves-effect waves-light" href="#AddPhotos"><i className="mdi-image-camera-alt"></i> Add Photos</a>
                            </li>
                            <li className="tab col s3"><a className="white-text waves-effect waves-light" href="#CreateAlbum"><i className="mdi-image-photo-album"></i> Create Album</a>
                            </li>
                          <div className="indicator" style={style2}></div></ul>
{/* update status */}
                          <div id="UpdateStatus" className="tab-content col s12  grey lighten-4" style={style3}>
                            <div className="row">
                              <div className="col s2">
                                <img src="images/avatar.jpg" alt="" className="circle responsive-img valign profile-image-post" />
                              </div>
                              <div className="input-field col s10">
                                <textarea id="textarea" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea" className="">What's on your mind?</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col s12 m6 share-icons">
                                <a href="#"><i className="mdi-image-camera-alt"></i></a>
                                <a href="#"><i className="mdi-action-account-circle"></i></a>
                                <a href="#"><i className="mdi-hardware-keyboard-alt"></i></a>
                                <a href="#"><i className="mdi-communication-location-on"></i></a>
                              </div>
                              <div className="col s12 m6 right-align">
{/* dropdown trigger*/}
                                  <a className="dropdown-button btn" href="#" data-activates="profliePost"><i className="mdi-action-language"></i> Public</a><ul id="profliePost" className="dropdown-content">
                                    <li><a href="#!"><i className="mdi-action-language"></i> Public</a></li>
                                    <li><a href="#!"><i className="mdi-action-face-unlock"></i> Friends</a></li>
                                    <li><a href="#!"><i className="mdi-action-lock-outline"></i> Only Me</a></li>
                                  </ul>

{/*Dropdown Structure*/}


                                  <a className="waves-effect waves-light btn"><i className="mdi-maps-rate-review left"></i>Post</a>
                              </div>
                            </div>
                          </div>
{/*AddPhotos*/}
                          <div id="AddPhotos" className="tab-content col s12  grey lighten-4" style={style4}>
                            <div className="row">
                              <div className="col s2">
                                <img src="images/avatar.jpg" alt="" className="circle responsive-img valign profile-image-post" />
                              </div>
                              <div className="input-field col s10">
                                <textarea id="textarea" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea" className="">Share your favorites photos!</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col s12 m6 share-icons">
                                <a href="#"><i className="material-icons">videocam</i></a>
                                <a href="#"><i className="mdi-action-account-circle"></i></a>
                                <a href="#"><i className="mdi-hardware-keyboard-alt"></i></a>
                                <a href="#"><i className="mdi-communication-location-on"></i></a>
                              </div>
                              <div className="col s12 m6 right-align">
{/*Dropdown Trigger*/}
                                  <a className="dropdown-button btn" href="#" data-activates="profliePost2"><i className="mdi-action-language"></i> Public</a><ul id="profliePost2" className="dropdown-content">
                                    <li><a href="#!"><i className="mdi-action-language"></i> Public</a></li>
                                    <li><a href="#!"><i className="mdi-action-face-unlock"></i> Friends</a></li>
                                    <li><a href="#!"><i className="mdi-action-lock-outline"></i> Only Me</a></li>
                                  </ul>

{/*Dropdown Structure*/}
                                  <a className="waves-effect waves-light btn"><i className="mdi-maps-rate-review left"></i>Post</a>
                              </div>
                            </div>
                          </div>
{/*CreateAlbum*/}
                          <div id="CreateAlbum" className="tab-content col s12  grey lighten-4" style={style5}>
                            <div className="row">
                              <div className="col s2">
                                <img src="images/avatar.jpg" alt="" className="circle responsive-img valign profile-image-post" />
                              </div>
                              <div className="input-field col s10">
                                <textarea id="textarea" className="materialize-textarea"></textarea>
                                <label htmlFor="textarea" className="">Create awesome album.</label>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col s12 m6 share-icons">
                                <a href="#"><i className="mdi-image-camera-alt"></i></a>
                                <a href="#"><i className="mdi-action-account-circle"></i></a>
                                <a href="#"><i className="mdi-hardware-keyboard-alt"></i></a>
                                <a href="#"><i className="mdi-communication-location-on"></i></a>
                              </div>
                              <div className="col s12 m6 right-align">
{/*Dropdown Trigger*/}
                                  <a className="dropdown-button btn" href="#" data-activates="profliePost3"><i className="mdi-action-language"></i> Public</a><ul id="profliePost3" className="dropdown-content">
                                    <li><a href="#!"><i className="mdi-action-language"></i> Public</a></li>
                                    <li><a href="#!"><i className="mdi-action-face-unlock"></i> Friends</a></li>
                                    <li><a href="#!"><i className="mdi-action-lock-outline"></i> Only Me</a></li>
                                  </ul>

{/*Dropdown Structure*/}


                                  <a className="waves-effect waves-light btn"><i className="mdi-maps-rate-review left"></i>Post</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

    );
  }
}
