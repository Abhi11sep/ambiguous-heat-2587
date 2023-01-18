const mongoose=require("mongoose")

require("dotenv").config()

const connectDB=()=>{
    return mongoose.connect(process.env.URL)
}

module.exports=connectDB

let obj={


}

obj.name="pankaj"
console.log(obj)