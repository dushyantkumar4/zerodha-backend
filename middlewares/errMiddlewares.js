module.exports.errHandler = (req,res,next,err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log(err);
    }
    res.status(500).json({message:"there is problem in db"});
}