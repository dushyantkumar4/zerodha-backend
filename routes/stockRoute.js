const express=require("express");
const router = express.Router();

const stockController = require("../controller/stockContorller.js");

router.get("/allholdings",stockController.allHoldings);
router.get("/allpositions",stockController.allPositions);
router.post('/neworder',stockController.newOrder);
router.delete("/neworder",stockController.deleteOrder);


module.exports= router;