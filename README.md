Offers a function to read user input synchronously from the command line.

### Example:

```js
var query = require('synchronous-user-input');

var name = query('please enter your name: ');
console.log("hello, " + name + "!");

var aNumber = query('please enter a number: ');
console.log('you entered: ' + aNumber);

var anotherNumber = query('please enter another number: ');
console.log('you entered: ' + anotherNumber);

console.log('the sum of these two numbers are: ' + (aNumber + anotherNumber));
```
