var query = require('./readLineSync');

var name = query('please enter your name: ');
console.log("hello, " + name + "!");

var aNumber = parseInt(query('please enter a number: '));
console.log('you entered: ' + aNumber);

var anotherNumber = parseInt(query('please enter another number: '));
console.log('you entered: ' + anotherNumber);

console.log('the sum of these two numbers are: ' + (aNumber + anotherNumber));