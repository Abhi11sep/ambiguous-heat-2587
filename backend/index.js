const express =require("express")
const cors=require("cors")
const connectDB=require("./configs/db")
require("dotenv").config()
const userRouter=require("./routes/user.routes")

const app=express()
app.use(express.json())

app.use(cors())
app.use("/users",userRouter)

app.listen(process.env.PORT, async()=>{
     await connectDB()
    console.log(`http://localhost:${process.env.PORT}`)
})


// {
//     "mobile":122334828,
//     "name":"pankaj",
//     "email":"pankaj@gmail.com",
//     "gender":"male",
//     "password":"pankaj@21",
//     "role":"seller"
//   }