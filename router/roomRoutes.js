const http = require('express');
const roomsRouter = http.Router();
const rooms = require('../modal/room')


//add room
//http:localhost:4000/add
roomsRouter.post('/add',(req,res)=>{
    rooms.create(req.body).then((addroom)=>{
          if(addroom){
              res.send(addroom)

          }
          else{
              res.send("err occour")
          }
       
          
      }).catch((err)=>{
          console.log(err)
          res.send("err")
      })
     
})
//find available rooms
//http:localhost:4000/availbleRoom
roomsRouter.get('/availbleRoom',(req,res)=>{
    rooms.find({availbility:true}).then((aroom)=>{
         res.send(aroom)
    }).catch((err)=>{
        console.log(err)
    })
})


//search available room
roomsRouter.get('/:id',(req,res)=>{
    rooms.find({roomId:req.params.id}).then((findroom)=>{
            res.send(findroom)
     }).catch((err)=>{
            console.log(err)
     })
})






module.exports = roomsRouter
