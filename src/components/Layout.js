/*jshint esversion: 6 */
// making a react component
import React, {Component} from 'react';
import io from 'socket.io-client';
import {USER_CONNECTED} from '../Events.js';

// connected to the URL of the server
const socketUrl = "http://10.0.0.195:3231";
export default class Layout extends Component{

	// connecting to io server

	// constructing a component 
	constructor(props){
		super(props);

		this.state = {
			socket:null,
			user:null
		};		
	}

	componentWillMount(){
		this.initSocket();
	}

	/*
		connect to and initializes the socket
	*/
	initSocket = ()=>{
		const socket = io(socketUrl);
		socket.on('connect', ()=>{
			console.log('connected');
		});
		// setting the state of the socket
		this.setState({socket});
	}

	/*
		Sets the user property in state
		@param user{id: number, name: string}
	*/
	setUser = (user) => {
		const {socket} = this.state;
		socket.emit(USER_CONNECTED, user);
		this.setState({user});
	}

	/*
		Sets the user property in state to null when user logs out
	*/
	logout = () => {

		// emit to the server that the suer logged out
		const {socket} = this.state
		socket.emit(LOGOUT)
		this.setState({user}:null) 
	}

	render(){
		const{title} = this.props;
		return(
			<div className="container">
				{title}
			</div>
		);
	}
}














