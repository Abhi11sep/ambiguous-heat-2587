const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    mobile: { type: Number, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: {
      type: String,
      enum: ["male", "female", "others"],
      required: true,
    },
    password: { type: String, required: true },
    role: { type: String, enum: ["buyer", "seller"], default: "buyer" },
  },
  {
    versionKey: false,
  }
);

const userModel = model("user", userSchema);

module.exports = userModel;
