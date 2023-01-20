const express = require("express");
const adminMiddleware = require("../middlewares/adminMiddleware");
const productModel = require("../models/productModel");

const app = express.Router();

app.get("/", async (req, res) => {
  let products = await productModel.find();
  res.send(products);
});
app.use(adminMiddleware)
app.post("/add", async (req, res) => {
  const payload = req.body;
  console.log(payload)
  try {
    let newProduct = new productModel(payload);
    await newProduct.save()
    res.send(newProduct);
  } catch (e) {
    res.send(e.message);
  }
});



app.patch("/update/:id", async (req, res) => {
  const payload = req.body;
  let id = req.params.id;
  try {
    await productModel.findByIdAndUpdate({ _id: id }, payload);
    res.send("Updated ");
  } catch (e) {
    res.send(e.message);
  }
});




app.delete("/delete/:id", async (req, res) => {
  let id = req.params.id;
  try {
    await productModel.findByIdAndDelete({ _id: id });
    res.send("Deleted ");
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = app;
