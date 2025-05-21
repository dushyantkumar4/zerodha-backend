const {HoldingModel} = require("../model/HoldingModel");
const {PositionsModel}= require("../model/PositionsModel");
const {OrdersModel} = require("../model/OrdersModel");

module.exports.allHoldings = async(req,res)=>{
    let allHoldings = await HoldingModel.find({});
    res.json(allHoldings);}


module.exports.allPositions = async(req,res)=>{
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
}

module.exports.newOrder =async(req,res)=>{
    let newOrder = new OrdersModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode,
    });
    let newHoldings = new HoldingModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode,
        net:0,
        day:0,
        avg:0
    });
    await newHoldings.save();
    await newOrder.save();
    res.send("Order placed");
}

module.exports.deleteOrder=async(req,res)=>{
    const {qty,price}=req.body;
    if (!qty || !price) {
    return res.status(400).json({ message: "Missing qty or price" });
  }
    try{
        const deleteHolding =await HoldingModel.findOneAndDelete({qty,price});
        const deleteOrder = await OrdersModel.findOneAndDelete({qty,price});
        if(!deleteOrder && !deleteHolding){
            return res.status(404).json({message:"order not found"});
        }
        res.status(200).json({message:"order deleted",deleteOrder})
    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Error deleting order"});
    }
}