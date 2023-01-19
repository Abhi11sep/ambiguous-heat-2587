const { Schema, model } = require("mongoose");

const wishlistSchema = new Schema({

    userId: { type: Schema.Types.ObjectId, ref: 'user' },
    productId: { type: Schema.Types.ObjectId, ref: 'product' }

}, {
    versionKey: false
})

const wishlistModel = model('wishlist', wishlistSchema);

module.exports = wishlistModel;