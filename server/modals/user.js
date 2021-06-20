const mongoose= require('mongoose');

const userSchema=mongoose.Schema({
    
    fullName:{
        type:String,
         required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    statuse:{
        type:String,
        default:'candidate'
    }
})

module.exports=mongoose.model('User',userSchema) 