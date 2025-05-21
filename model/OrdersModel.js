const {model} =require("mongoose");
const { OrderSchema } = require ("../Schema/OrdersSchema");

const OrdersModel = model("Order",OrderSchema);

module.exports = {OrdersModel};