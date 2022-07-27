const mongoose =require('mongoose')

const userSchema = mongoose.Schema({
   name:String,
   email:String,
   phoneNumber:Number
   
})


module.exports = mongoose.model('user',userSchema)