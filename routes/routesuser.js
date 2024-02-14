const route=require('express').Router()
const dbcontrol=require('../controller/controllerfile')
route.post('/2',dbcontrol.register)
module.exports=route