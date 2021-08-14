const express = require('express')
const router  = express.Router();
const room = require('../modal/room')
const reservation = require('../modal/reservation')

//create reservation
router.post('/add',(req,res)=>{
    
    reservation.create(req.body).then((reser)=>{
           res.send(reser)

    }).catch((err)=>{
        console.log(err)
    })
})

router.put('/add/:id',(req,res)=>{
    reservation.updateOne({_id:req.params.id},{$push:{room:req.query.roomId}}).then((completeReservation)=>{
        //update room availbility
         room.updateOne({_id:req.query.roomId},{$set:{availbility:false}})
         res.send("complete reservation")
    }).catch((err)=>{
        res.send(err)
    })
})

//view all reservation
router.get('/',(req,res)=>{
    reservation.find().then((resers)=>{
        res.send(resers);
    }).catch((err)=>{
        res.send(err)
    })
})




//view room in reserve
 router.get('/reservrooms/:id', async(req,res)=>{
   
      reservation.findOne({_id:req.params.id}).then((roomsrs)=>{
            const reservRooms = [];
            const keys =  roomsrs.room.keys();
           
            for (let x of keys) {
                 console.log(roomsrs.room[x])
                  room.findOne({_id:roomsrs.room[x]}).then((getroom)=>{
                    reservRooms.push(getroom)
                   
                 }).catch((err)=>{
                     res.send("err")
                 })
            }
            setTimeout(function(){
                res.send(reservRooms)

            },3000)
            
          
       
           
    }).catch((err)=>{
        res.send(err)
    })
})



module.exports = router;