const {model} = require("mongoose");

const {userSchema} = require("../Schema/userSchema.js");

const userModel = model("User",userSchema);

module.exports = {userModel};