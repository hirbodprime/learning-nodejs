const http = require('http')
const os = require('os')
var userInfo = os.userInfo()
const server = http.createServer()
const serverPort = 3000
server.on('connection',(socket)=>{
    console.log(`new connection from ${userInfo.username}`);
})
server.listen(serverPort)
console.log(`server created on port ${serverPort}`);