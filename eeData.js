const EventEmitter = require('events');
//const data = require('./ee.js');

const ee = new EventEmitter();

ee.on('we did it - with data', data => {

  console.log(data);
});
ee.emit('we did it - with data', 'hi there');
//

