var http = require('http');
var mockserver = require('mockserver');
 
http.createServer(mockserver('./mock')).listen(9001);