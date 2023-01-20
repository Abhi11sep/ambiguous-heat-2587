const express =require("express")
const cors=require("cors")
const connectDB=require("./configs/db")
require("dotenv").config()
const userRouter=require("./routes/user.routes")
const cartRouter=require("./routes/cart.routes")
const productRouter=require("./routes/product.routes")
const  adminRouter=require("./routes/admin.routes")
const app=express()
app.use(express.json())

app.use(cors())
app.use("/users",userRouter)
app.use("/carts", cartRouter)
app.use("/products", productRouter)
app.use("/admin", adminRouter)


app.listen(process.env.PORT, async()=>{
     await connectDB()
     
    console.log(`http://localhost:${process.env.PORT}`)
})

