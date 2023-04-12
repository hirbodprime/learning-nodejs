const EventEmmiter =  require('events');
const eventObj = new EventEmmiter();


eventObj.on('hirbod' , function(){

    console.log('What?');
})

eventObj.on('logged In' , (arg) => {
    console.log(arg);
})

eventObj.emit('logged In',{id:1 ,username:'hirbodprime', firstname:'hirbod' , lastname:"aflaki"})
// eventObj.emit('hirbod')


