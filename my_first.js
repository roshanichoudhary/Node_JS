var http = require('http');
var url = require('url');


http.createServer(function (req, res) {
    // console.log(req.url);
  
  var q = url.parse(req.url, true).query;
  console.log(q);
  var txt = q.year + " " + q.month;
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>Hello World!</h1>' + txt);
}).listen(8080);