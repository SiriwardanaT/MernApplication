const http = require('express')
const userRouter = http.Router();
const user = require('../modal/user')
//crud apis

//user information insert api
//http:localhost:4000/user/add
userRouter.post('/add',(req,res)=>{

      //check already user
      //if already user form must fill auto
      user.findOne({nic:req.body.nic}).then((Alreadyusers)=>{
          if(Alreadyusers==null){
            user.create(req.body).then((getUser)=>{
                res.send(getUser)
            }).catch((err)=>{
                res.send("something went wrong!"+err)
            })
          }
          else{
              res.send("alread user")
          }

      }).catch((err)=>{
          console.log(err)

      })



     
})

//read all user api
//http:localhost:4000/user
userRouter.get('/',(req,res)=>{
     user.find().then((read_info)=>{
         res.send(read_info)

     }).catch((err)=>{
        res.send("someting went wront")

     })
})
//find user api
//http:localhost:4000/user/3
userRouter.get('/:nic',(req,res)=>{
     user.findOne({nic:req.params.nic}).then((user)=>{
         res.send(user)

     }).catch((err)=>{
         
         res.status(404).json({"message":"user could find","availble":false})
     })
})
//update user api
//http:localhost:4000/user/4
userRouter.put('/:id',(req,rep)=>{
    user.updateOne({_id:req.params.id},{$set:req.body}).then((updatedUser)=>{
        rep.send("user updated")
    }).catch((err)=>{
        rep.send("user not updated")
    })
   
})
//delete
//http:localhost:4000/user/4
userRouter.delete('/:id',(req,res)=>{
    user.deleteOne({_id:req.params.id}).then((deleteUser)=>{
            res.send("user deleted")
    }).catch((err)=>{
        res.send(err)
    })
})





module.exports = userRouter



