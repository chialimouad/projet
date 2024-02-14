const mongoose=require('mongoose')
const db=require('../config/db')
const bcrypt =require('bcrypt')
const { Schema }=mongoose
const userschema =new Schema({
    email :{
        type:String,
        required:true,
        lowercase:true,
        unique:true,
      
    },
    password :{
        type:String,
        required:true,
       
    }
})
const user=db.model('user',userschema)
module.exports=user