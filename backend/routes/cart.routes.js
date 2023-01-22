const { Router } = require('express');
const authMiddleware = require('../middlewares/authMiddleware')
const cartModel=require("../models/cartModel")

const app = Router();


app.use(authMiddleware)
app.get('/', async (req, res) => {

    const  _id  = req.userDetails;

    try {
       await cartModel.find({ userId: _id }).populate('productId').then(r => {
            return res.status(200).send(r)
        });
    } catch (e) {
        return res.status(400).send(e.message)
    }

})


app.post('/add', async (req, res) => {
    const  productId = req.body;
   
    const { _id } = req.userDetails;
    
    try {
        
        let existingProduct = await cartModel.findOne({ productId, userId:_id });
        if(existingProduct){
           return res.status(400).send('product already exists')
        }
       
        let cartItem = new cartModel({ productId, userId: _id });
        await cartItem.save()
        return res.status(200).send(cartItem);
        
    } catch (e) {
        return res.status(400).send(e.message)
    }
})

app.delete('/delete/:id', async (req, res) => {

    const  productId = req.params.id;
    // console.log(productId)

    try {
       let cart= await cartModel.findOneAndDelete({productId});
        // console.log(cart)
        return res.status(200).send('deleted')
        
    } catch (e) {
        return res.status(400).send(e.message)
    }
})


module.exports = app;