const express = require("express");

const adminModel = require("../models/adminModel");
const jwt = require("jsonwebtoken");

const app = express.Router();
require("dotenv").config;

app.get("/", async (req, res) => {
  let admin = await adminModel.find();
  res.send(admin);
});
app.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    let adminUser = new adminModel({
      email,

      password,
    });
    await adminUser.save();
    res.status(200).send(adminUser);
  } catch (e) {
    res.status(400).send(e.message);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    let existingUser = await adminModel.findOne({ email, password });

    if (existingUser) {
      let token = jwt.sign(
        { _id: existingUser._id, email: existingUser.email },
        process.env.TOKEN
      );
      res.status(200).send({ token: token });
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (e) {
    res.status(400).send(e.message);
  }
});

module.exports = app;
