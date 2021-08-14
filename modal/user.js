//first step
const mongoose = require('mongoose');

//second step
const user_scheama = new mongoose.Schema({

        username : {
            type:String,
            required : true
        },
        nic:{
            type:String,
            reqiuired:true
        },
        address:{
            type:String,
            required:true

        },
        age:{
            type:Number,
            required : true
        },
        phone:{
            type:String,
            required:true
        },
        gender:{
            type:String,
            required:true
        }

        



},{collection:"user"})

//create modal
const usermodal = mongoose.model('user_modal',user_scheama)

module.exports =  usermodal









