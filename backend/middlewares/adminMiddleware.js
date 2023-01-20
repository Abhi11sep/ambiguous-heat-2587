const jwt =require("jsonwebtoken")
require("dotenv").config()



const adminMiddleware=(req,res,next)=>{
const  { token }=req.headers
try{
    if(token){
        const verify=jwt.verify(token,process.env.TOKEN)
        if(verify.role==="seller"){
            req.userDetails=verify
            next()
        }else{
            res.status(401).send("Unauthorised")
        }
    }else{
        res.status(401).send("Send Token")
    }
}catch(e){
    res.status(403).send(e.message)
}


}

module.exports=adminMiddleware