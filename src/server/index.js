/*jshint esversion: 6 */
// setting up the server 
var app = require('http').createServer();
var io = module.exports.io = require('socket.io')(app);

// creating a port number, the variable is set to env file if it exists otherwise
// gets set to 3231 
const PORT = process.env.PORT || 3231;

// get a variable from socket manager
const socketManager = require('./socketManager');

// when a connection is established, io sends a socket to our function socket manager
io.on('connection', socketManager);

// -=-----
app.listen(PORT, ()=>{
	console.log('connected to port', + PORT);
}); 