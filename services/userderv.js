const dbq=require('../models/user_model')
class serviceuser{
     static async registeruser(email,password){
       try{
       const par=new dbq({email,password})
       return await par.save()

       }catch(err){console.log(err)}
     }

}
module.exports=serviceuser
