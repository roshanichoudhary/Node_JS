var events = require('events');
var eventEmitter = new events.EventEmitter();

//Create an event handler:
var myEventHandler = function () {
  console.log('I hear a scream!');
}
var myEventHandlerHello = function () {
    console.log('I hear a Hello!');
  }

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);
eventEmitter.on('Hello', myEventHandlerHello);

//Fire the 'scream' event:
eventEmitter.emit('Hello');