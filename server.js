const http = require('express');
const app = http();
const bodyparser = require('body-parser');
const userRouter = require('./router/userRouter') 
const roomRouter = require('./router/roomRoutes')
const mongoose = require('mongoose')
const dotenv  = require('dotenv')
dotenv.config();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended:true
}))


//use router middleware
app.use('/user',userRouter);
app.use('/room',roomRouter);





app.get('/',(req,res)=>{
    console.log(req.body)
})




//mongodb connection
mongoose.connect(process.env.DB, {useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{
    console.log("database connected")

}).catch((err)=>{
    console.log("database not connectd"+err)
})

//server connection
const port = 3000
app.listen(port,()=>{
    console.log(`http://localhost/${PORT}`);
})