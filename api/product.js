const express=require("express");
const router=express.Router();
router.get("/",async(req,res)=>{
try{
    res.json({
        status:200,
        message:"get data has success"
    })
}catch(Error){
console.error(error);
returnres.status(500).send("Server err")
}
});
module.exports=router;