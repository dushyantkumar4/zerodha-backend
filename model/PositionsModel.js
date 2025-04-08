const {model} = require("mongoose");
const {PositionsSchema} = require("../Schema/PositionsSchema");

const PositionsModel = model("Position",PositionsSchema);

module.exports= {PositionsModel};