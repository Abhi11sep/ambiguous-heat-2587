const express = require("express");
const productModel = require("../models/productModel");

const app = express.Router();

app.get("/", async (req, res) => {
  let products = await productModel.find();
  res.send(products);
});

app.post("/add", async (req, res) => {
  const payload = req.body;
  try {
    let newProduct = new productModel(payload);
    res.send(newProduct);
  } catch (e) {
    res.send(e.message);
  }
});

module.exports = app;
