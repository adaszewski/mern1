const Event = require('../models/Event')

function eventTable(cb){
    Event.find().lean().exec(function(err, events) {
        if(err) {
            cb(err)
        } else {
            cb(null, events)
        }   
    });
}
function eventAdd(data,cb){
    let newEvent=new Event(data)

    newEvent.save(function(err, event) {
        if(err) {
            cb(err)
        } else {
            cb(null, event)
        }   
    });
}


    module.exports = {
        list: eventTable,
        add: eventAdd
    }