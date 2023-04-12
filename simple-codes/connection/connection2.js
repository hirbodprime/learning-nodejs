const http =  require('http')
const os = require('os')
var userInfo = os.userInfo()
const serverPort = 3000;

const server = http.createServer((req , res) => {
    if (req.url==='/') {
        res.write(`hi user ${userInfo.username}`)
        res.end();
        
    }
    if(req.url==='/api/welcome/'){
        res.write('welcome');
        res.end();
    }
})

server.listen(serverPort);

console.log('new server started');