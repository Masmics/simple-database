const { Buffer } = require('buffer');

// or const [ Buffer ] = require('buffer');

//Buffer.alloc to create an empty buffer of length 10
const b = Buffer.alloc(10, 'a'); //'a'
console.log(b);

const buf = Buffer.from('hello');
console.log(buf);

console.log(buf.map(byte => {
  return 104; 
}).toString());
