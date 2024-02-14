const express =require('express')
const bodyparser =require('body-parser')
const useroute =require('./routes/routesuser')
const app = express()
app.use(bodyparser.json())
app.use('/',useroute)

module.exports=app