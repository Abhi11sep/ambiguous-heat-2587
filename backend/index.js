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


// {
//     "mobile":122334828,
//     "name":"pankaj",
//     "email":"pankaj@gmail.com",
//     "gender":"male",
//     "password":"pankaj@21",
//     "role":"seller"
//   }

// _id:63c7c402b1af590464e060b3


// {
//     "category": "Bracelet",
//      "imageSrc": "https://cdn.caratlane.com/media/catalog/product/cache/6/image/480x480/9df78eab33525d08d6e5fb8d27136e95//J/T/JT01730-1RP600_11_listfront.jpg",
//      "discountedPrice": "₹45,232",
//      "originalPrice": "₹49,207",
//     "brand": "Miami Diamond Bracelet"
//  }