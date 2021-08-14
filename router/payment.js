const express = require('express')
const paymentRouter = express.Router();
const payment = require('../modal/payement')
const reservation  = require('../modal/reservation')

//add payment
paymentRouter.post('/add',(req,res)=>{
    payment.create(req.body).then((pay)=>{
         if(pay){
            reservation.updateOne({_id:req.body.reservation},{$set:{paymentStatus:true}}).then((updatedStatus)=>{
                if(updatedStatus){
                    res.send("Payment completed")

                }else{
                    res.send("something went wrong!")
                }
            }).catch()
         }
         else{
            res.send("something went wrong!")
         }
    })
    .catch(()=>{
        res.send("something went wrong!")
    })
})

//get payment all payment information
paymentRouter.get('/',(req,res)=>{
    payment.find().then((payements)=>{
         if(payements){
            res.send(payements)

         }else{
             res.send("payement list not availble")

         }
     
    }).catch(()=>{
        console.log("something went wrong")
    })  

})
module.exports = paymentRouter