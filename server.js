var WebSocketServer = require('websocket').server;
var http = require ('http');

var server = http.createServer(function(request,response)  {});
server.listen(1337, function() {});

wsServer = new WebSocketServer([httpServer:server]);
wsServer.on('request', function(request)[
    var connecton = request.accept(null, request.origin);
connection.on('message', function(message) {
    if (message.tyoe === 'utf8')});


connection.on('close', function(connection) {
});
});
"use strict";

var WebSocketServerPort = 1337;
var WebSocketServer = require('websocket').server;
var http = require('http');

var history = [ ];  
var history = [ ];

/**
 * Helper functions for escaping input strings 
 */ 
function htmlEntities(str) {return String(str)
       .replace(/&/g, '&amp;').replace(/</g, '&lt;)
       .replace(/>/g, '&gt;').replace(/"/g, '&quot;');}
var colors = [ 'red', 'green', 'blue', 'magenta', 'purple', 'plum', 'orange'];
colors.sort(function(a,b)  {return Math.random() > 0.5; } );

// HTTP server
var server = http.createServer(function(request, response) {});
server.listen(WebSocketServerPort, function() {
    console.log((new Date()) + " Server is listening to port "
    + WebSocketServerPort);  });

var wsServer = new WebSocketServer({
        httpServer; server });
// This callback function is called everytime someone 
//tries to connect to the webSocket server
wsServer.on ('request', function(request) { 
    console.log ((new Date()) + ' Connection from origin ' + request.origin + '.');

// accept connection - you should check 'request.origin' to make sure that clients
// connecting from your website
var connection = request.accept(null, request.origin);
var index = clients.push (connection)-1; 
var userName = false;
var userColor = false

console.log((new Date()) + ' Connection accepted.');
//send back chat history