//#!/usr/bin/env node

//  simple command line example of how to write a node app using roslibjs:
//  https://github.com/RobotWebTools/roslibjs
//  https://github.com/RobotWebTools/roslibjs/blob/develop/examples/node_simple.js

//  Synopisis: this node app will publish 1 /cmd_vel message into ROS network
//             each time you run it

// Connecting to ROS 
var ROSLIB = require('roslib');

var ros = new ROSLIB.Ros({
    //url : 'ws://localhost:9090'
    url : 'ws://192.168.2.15:9090'
});

ros.on('connection', function() {
console.log('Connected to websocket server.');
});

ros.on('error', function(error) {
console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function() {
console.log('Connection to websocket server closed.');
});

// Publishing a Topic
// ------------------

var cmdVel = new ROSLIB.Topic({
  ros : ros,
  name : '/cmd_vel',
  messageType : 'geometry_msgs/Twist'
});

var twist = new ROSLIB.Message({
linear : {
  x : 0.1,
  y : 0.2,
  z : 0.3
},
angular : {
  x : -0.1,
  y : -0.2,
  z : -0.3
}
});

function loop() {
    console.log("Publishing cmd_vel");
    cmdVel.publish(twist);
}

setInterval(loop, 1000);


    
