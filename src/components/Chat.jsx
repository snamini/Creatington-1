import React from 'react';
import './Chat.css';
import * as firebase from 'firebase';

var aStyle = {
	float: "right",
	color: "#FFF",
	margin: "0 5px 0 5px"
}

var chat = {
	position: "fixed",
	bottom: "100px",
	left: "925px"
}

const config = {  
  apiKey: "AIzaSyDevs0jOfBmLAbSdQM3drBjh9SjwsqORoE",
    authDomain: "chattest-c7252.firebaseapp.com",
    databaseURL: "https://chattest-c7252.firebaseio.com",
    storageBucket: "chattest-c7252.appspot.com",
    messagingSenderId: "627504558404"
};

export default class MyChat extends React.Component {
	
	constructor(props, context){
		super(props, context)
		this.pickUser = this.pickUser.bind(this)
		this.updateMessage = this.updateMessage.bind(this)
		this.submitMessage = this.submitMessage.bind(this)
		this.handleKeyPress = this.handleKeyPress.bind(this)
		this.state = {
			message: '',
			messages: []
		}
	}

	componentDidMount(){
		console.log('componentDidMount')
		firebase.initializeApp(config).database().ref('messages/').on('value', (snapshot)=> {

			const currentMessages = snapshot.val()

			if (currentMessages != null){
				this.setState({
					messages: currentMessages
				})
			}
		})
	}

	pickUser(target) {
	if(target.charCode===13){	
		var user = document.getElementById("user").value;
		this.setState({
			user: user
		})
		this.refs.clearuserfield.value = '';
	}
	}

	updateMessage(event){
		console.log('updateMessage: ' +event.target.value)
		this.setState({
			message: event.target.value
		})
	}

	submitMessage(event){
		console.log('submitMessage: ' +this.state.message)
		const nextMessage = {
			id: this.state.messages.length,
			text: this.state.message,
			user: this.state.user
		}

		firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)
		this.refs.cleartext.value = '';

		// var list = Object.assign([], this.state.messages)
		// list.push(nextMessage)
		// this.setState({
		// 	messages: list
		// })
	}

	handleKeyPress(target) {
    if(target.charCode===13){
        console.log('submitMessage: ' +this.state.message) 
        const nextMessage = {
		id: this.state.messages.length,
		text: this.state.message,
		user: this.state.user
	}

		firebase.database().ref('messages/'+nextMessage.id).set(nextMessage)  
    	this.refs.cleartext.value = '';
    }
}

	render() {

		const currentMessage = this.state.messages.map((message, i) => {
			if(this.state.user !== this.state.otherUser){
            return(		
                	<li key={message.id}>
                        <span className="right"><strong>{message.user}</strong>: {message.text}</span>
                        <div className="clear"></div>
                    </li>
                   ) 
            }          
		})

		return (	

		<div className="chat-box" style={chat}>
            <div className="header">
                Chat
                <a href="#" style={aStyle}>X</a>
                <a href="#" style={aStyle}>_</a>
            </div>
            
            <div id="messages" className="messages">
                <ul>
                   {currentMessage}
                </ul>
                <div className="clear"></div>
            </div>
            
            <div className="input-box">

                <input onChange={this.updateMessage} onKeyPress={this.handleKeyPress} type="text" placeholder="Message" ref="cleartext" />
				<input onKeyPress={this.pickUser} id="user" type="text" placeholder="Type your name and press Enter" ref="clearuserfield" />
            </div>
        </div>
		)
	}
}