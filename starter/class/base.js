const Logger = require('./class')
const LoggerObj = new Logger();


LoggerObj.on('logged In', (arg) => {
    console.log(arg);
})
LoggerObj.log()