/**
 * CRUD operations 
 * @author Rakesh
 */


const express = require('express'); // express module
const mongoose = require('mongoose'); // mongoose module
const app = express();
const url = 'mongodb+srv://jerryplox:Jerryplox%4011@cluster0.vfcma.mongodb.net/Jerryplox?retryWrites=true&w=majority'


mongoose.connect(url , {useNewUrlParser:true}).then(()=>{
  console.log('connection success')
})

const con = mongoose.connection;

con.on('open', function(){
  console.log('connected...')
})

app.use(express.json())

const userRouter = require('./routes/user');  //path
app.use('/user', userRouter);
app.listen(9000, function(){
  console.log('server started')
})