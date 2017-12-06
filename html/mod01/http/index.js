var http = require('http');
var fs = require('fs');
var server = http.createServer();
var htmlFile = 'index.html';
server.on('request',function(request,response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/hello' ) {
        response.write('<body>');
        response.write('<h1>Witaj Świecie!</h1>');
        response.write('</body>');
        response.end();
    } else if (request.method === 'GET' && request.url === '/') {
        fs.readFile(htmlFile,'utf-8',function(err,data) {
            // console.log('Dane po zapisie'.blue) ;
            // console.log(data);
            response.write(data);
            response.end();
         });
               
    } else {
        response.statusCode = 404;
        response.write('<body>');
        response.write('<h1>404: Zła ścieżka</h1>');
        response.write('</body>');
        response.end();
    }
   
});
server.listen(9000);