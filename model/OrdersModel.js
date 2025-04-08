const {model} =require("mongoose");
const {OrdersSchema} = require ("../Schema/OrdersSchema");

const OrdersModel = model("Order",OrdersSchema);

module.exports = {OrdersModel};