var stuff = require('./stuff1');

console.log(stuff.counter(['bruce', 'tiger', 'smokey']));
console.log(stuff.adder(5,6));
//adds pi to 5
console.log(stuff.adder(stuff.pi, 5));