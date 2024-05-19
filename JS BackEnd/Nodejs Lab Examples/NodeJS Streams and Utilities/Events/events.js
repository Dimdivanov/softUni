const events = require('events');
let eventEmmiter = new events.EventEmmiter();

eventEmmiter.on('click', (a, b) => {
  console.log('Detected a click');
  console.log(a + ' ' + b); //output 'Hello world'
});

eventEmmiter.emit('click', 'Hello', 'world');
