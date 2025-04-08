const {model} = require ("mongoose");

const {HoldingSchema} = require("../Schema/HoldingSchema.js");

const HoldingModel = model("Holding",HoldingSchema);
module.exports = {HoldingModel};