var fs = require('fs');

fs.unlink('mynewfile-d.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});