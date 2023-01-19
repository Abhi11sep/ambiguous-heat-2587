const { Schema, model } = require("mongoose");

const cartSchema = new Schema({

    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    productId: { type: Schema.Types.ObjectId, ref: 'product' }

}, {
    versionKey: false
})

const cartModel = model('cart', cartSchema);

module.exports = cartModel;