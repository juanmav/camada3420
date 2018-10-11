const http = require('http');


const server = http.createServer(function(req, res){
    let stream = fs.createReadStream(__dirname + '/archivo.txt');
    stream.pipe(res);
});

server.listen(8000);
