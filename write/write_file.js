var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'change text!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});