const http = require('express')
const userRouter = http.Router();
const user = require('../modal/user')
//crud apis

//user information insert 
userRouter.post('/adduser',(req,res)=>{
      user.create(req.body).then((getUser)=>{
          res.send(getUser)
      }).catch((err)=>{
          res.send("something went wrong!"+err)
      })
})

//read
userRouter.get('/',(req,res)=>{
     user.find().then((read_info)=>{
         res.send(read_info)

     }).catch((err)=>{
        res.send("someting went wront")

     })


})

//unique user 
userRouter.get('/:id',(req,res)=>{
    user.findById(req.params.id).then((getuser)=>{
            res.send(getuser)
    }).catch((err)=>{
        res.send(err)
    })
})



//update
userRouter.put('/:id',(req,rep)=>{
    user.updateOne({_id:req.params.id},{$set:req.body}).then((updatedUser)=>{
        rep.send("user updated")
    }).catch((err)=>{
        rep.send("user not updated")
    })
   
})

//delete
userRouter.delete('/:id',(req,res)=>{
    user.deleteOne({_id:req.params.id}).then((deleteUser)=>{
            res.send("user deleted")
    }).catch((err)=>{
        res.send(err)
    })
})





module.exports = userRouter



