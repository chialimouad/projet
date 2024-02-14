const userserv =require('../services/userderv')


exports.register= async(req,res,next)=>{try{
    const {email,password}=req.body
    const usercontrol =await userserv.registeruser(email,password)

    res.json({status:true,success:"user succsefully"})
}catch(err){console.log(err)}}