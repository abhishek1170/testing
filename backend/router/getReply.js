let router = require("express").Router();
let replyApi = require("../api/replyApi");

router.post("/",(req,res)=>{
     replyApi.getReply(req.body,(err,data)=>{
         if(err){
                    res.send("Network error");}
          else  
                                res.send(data); 
     })
})

module.exports=router;