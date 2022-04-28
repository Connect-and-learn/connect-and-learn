const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    role: String,
    username: String,
    email: String,
    password: String,
    discipline: String,
    phone: Number,
    addInfo: String,
  });

const User = model("User", userSchema);

module.exports = User;


