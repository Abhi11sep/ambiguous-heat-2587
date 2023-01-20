const { Router } = require('express');
const authMiddleware = require('../middlewares/authMiddleware')
const wishlistModel=require("../models/wishlistModel")

const app = Router();

app.use(authMiddleware)

app.get('/', async (req, res) => {

    const { _id } = req.userDetails;

    try {
        wishlistModel.find({ userId: _id }).populate('productId').then(r => {
            return res.status(200).send(r)
        });
    } catch (e) {
        return res.status(400).send(e.message)
    }

})

app.post('/', async (req, res) => {
    const { productId } = req.body;
    console.log(req.body)
    const { _id } = req.userDetails;
    try {
        
        let existingProduct = await wishlistModel.findOne({ productId, userId:_id });
        if(existingProduct){
           return res.status(400).send('product already exists')
        }
       
        let cartItem = new wishlistModel({ productId, userId: _id });
        await cartItem.save()
        return res.status(200).send(cartItem);
        
    } catch (e) {
        return res.status(400).send(e.message)
    }
})

app.delete('/', async (req, res) => {

    const { productId } = req.body;

    try {
        await wishlistModel.findOneAndDelete({ productId });
        return res.status(200).send('deleted')
    } catch (e) {
        return res.status(400).send(e.message)
    }
})


module.exports = app;