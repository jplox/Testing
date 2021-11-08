//schema
const mongooes = require('mongoose');
const userSchema = new mongooes.Schema({
   name:{
       type:String,
       required:true
   },
})
module.exports = mongooes.model('User' , userSchema)