const http = require('express');
const app = http();
const bodyparser = require('body-parser');
const userRouter = require('./router/userRouter') 
const roomRouter = require('./router/roomRoutes')
const bookingRouter =require('./router/reservation')
const paymentRouter = require('./router/payment')
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
app.use('/payment',paymentRouter)
app.use('/booking',bookingRouter)



//mongodb connection
mongoose.connect(process.env.DB, {useNewUrlParser:true,useUnifiedTopology: true})
.then(()=>{
    console.log("database connected")

}).catch((err)=>{
    console.log("database not connectd"+err)
})

//server connection

app.listen(process.env.PORT || 5000,()=>{
    console.log(`http://localhost/${process.env.PORT}`);
})