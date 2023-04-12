const os = require('os')

var freemem = os.freemem()
var totalmem = os.totalmem()
var upTime = os.uptime()
var userInfo = os.userInfo()

console.log(freemem);
console.log(upTime);
console.log(totalmem);
console.log(userInfo);
