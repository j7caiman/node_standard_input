var readline = require('readline');
var deasync = require('deasync');

function query(question) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  var result;

	rl.question(question, function (input) {
    result = input;
  });

  while(result === undefined) {
    deasync.runLoopOnce();
  }

  rl.close();

  return result;
}

module.exports = query;