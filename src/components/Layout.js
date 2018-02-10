/*jshint esversion: 6 */
// making a react component
import React, {Component} from 'react';
import io from 'socket.io-client';

// connected to the URL of the server
const socketUrl = "http://10.0.0.195:3231";
export default class Layout extends Component{

	// connecting to io server

	// constructing a component 
	constructor(props){
		super(props);

		this.state = {
			socket:null
		};		
	}

	componentWillMount(){
		this.initSocket()
	}

	// initializing the socket
	initSocket = ()=>{
		const socket = io(socketUrl);
		socket.on('connect', ()=>{
			console.log('connected');
		});
		// setting the state of the socket
		this.setState({socket});
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