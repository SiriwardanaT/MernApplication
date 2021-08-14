const mongoose = require('mongoose')

const Payementscheama = mongoose.Schema({
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        reservation:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"reservation"
        },
        subtotal:{
            type:Number,
            min:0
            
        }
       
        




},{collection:"payment"})
module.exports = mongoose.model("payment",Payementscheama)
