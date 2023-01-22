const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    category: String,
    imageSrc: String,
    discountedPrice: String,
    originalPrice: String,
    brand: String,
    dprice:Number,
    oprice:Number,
  },
  {
    versionKey: false,
  }
);

const productModel = model("product", productSchema);

module.exports = productModel;
