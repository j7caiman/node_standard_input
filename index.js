var readline = require('readline');
var deasync = require('deasync');

function query(question) {
  var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  function askQuestion() {
    var result;
    rl.question(question, function(input) {
      result = input;
    });

    while (result === undefined) {
      deasync.runLoopOnce();
    }

    return result;
  }

  var result = "";
  while (result.length === 0) {
    result = askQuestion();
  }

  rl.close();

  if (isInteger(result)) {
    return parseInt(result);
  } else {
    return result;
  }
}

function isInteger(value) {
  return !/[a-z]/i.test(value)
    && !isNaN(value)
    && parseInt(Number(value)) == value
    && !isNaN(parseInt(value, 10));
}

module.exports = query;