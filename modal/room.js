const mongoose = require('mongoose')

const room = new mongoose.Schema({
    roomId : {
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    countbeds:{
        type:Number,
        required:true,
        min:1,
        max:4
    },
    availbility:{
        type:Boolean,
        default:true
    }
    

},{collection:"room"})

module.exports = mongoose.model('roomScheama',room)
