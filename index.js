require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const mongoose =require("mongoose");
const {errHandler} = require("./middlewares/errMiddlewares.js");
const stockRoute = require ("./routes/stockRoute.js");
const authRoute = require("./routes/AuthRoute.js");
const cookieParser = require("cookie-parser");
const bodyparser = require("body-parser");

const PORT = process.env.PORT || 8080;
const uri =process.env.MONGO_URL;
// app.use(bodyparser.json());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
// app.use(cors());

main().then(()=>{
    console.log("connected to db");
}).catch((err)=>{
    console.log(err.message);
});

async function main(){
    await mongoose.connect(uri);
}

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);


app.use("/",stockRoute);
app.use("/",authRoute);

app.use(errHandler);
app.listen(PORT,()=>{
    console.log("server has strated on 8080");
});