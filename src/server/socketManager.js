/*jshint esversion: 6 */
const io = require('./index.js').io;

// exporting the socket-manager
module.exports = function(socket){
	console.log('socket id: ' + socket.id);
};  