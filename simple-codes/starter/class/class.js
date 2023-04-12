const EventEmmiter = require('events');


class Logger extends EventEmmiter {

    log(){
        
        this.emit('logged In',{id:1 ,username:'hirbodprime', firstname:'hirbod' , lastname:"aflaki"})
    }

};

module.exports = Logger;