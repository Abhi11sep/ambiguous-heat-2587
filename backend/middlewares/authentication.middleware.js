const jwt =require("jsonwebtoken")
require("dotenv").config()



const authenticate=(req,res,next)=>{
const token=req.headers
try{
    if(token){
        const verify=jwt.verify(token,process.env.TOKEN)
        if(verify){
            res.userDetails=verify
            next()
        }else{
            res.status(401).send("Unauthorised")
        }
    }
}catch(e){
    res.status(403).send(e.message)
}


}

module.exports=authenticate