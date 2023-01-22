const jwt =require("jsonwebtoken")
require("dotenv").config()



const authMiddleware=(req,res,next)=>{
const   token =req.headers.authorization
console.log("token",req.headers)

try{
    if(token){
        const verify=jwt.verify(token,process.env.TOKEN)
console.log("verify",verify)
        if(verify){
            req.userDetails=verify
            console.log("user",req.userDetails)
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

module.exports=authMiddleware