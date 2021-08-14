const mongoose = require('mongoose')

const booking = new mongoose.Schema({
    user: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    room:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"room"
    }],
    check_in_date:{
        type:String,

    },
    checkout:{
        type:String
    },
    numOfAdult:{
        type:Number,
        required:true,
        min:1
    },
    numOfChildren:{
        type:Number,
        requird:true,
        min:1
    },
    paymentStatus:{
        type:Boolean,
        default:false
        
    }
    




},{collection:"reservation"})

module.exports = mongoose.model('bookingScheama',booking)