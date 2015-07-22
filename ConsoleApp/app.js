var http = require('http');
http.createServer(function (req, res) {
    var buf = '';
    req.setEncoding('utf8');
    req.on('data', function (chunk) {
        if (chunk) {
            buf += chunk;
        }
    });
    req.on('end', function (chunk) {
        if (chunk) {
            buf += chunk;
        }
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        if (buf) {
            res.end(buf);
        } else {
            res.end('hello world');
        }
    });

}).listen(1337, '127.0.0.1');


console.log('Server running at http://127.0.0.1:1337/');