//first step
const mongoose = require('mongoose');

//second step
const user_scheama = new mongoose.Schema({

        username : {
            type:String,
            required : true
        },
        age:{
            type:Number,
            required : true
        }



},{collection:"user"})

//create modal
const usermodal = mongoose.model('user_modal',user_scheama)

module.exports =  usermodal









