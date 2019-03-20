let router = require("express").Router();
let getCommentApi = require("../api/commentApi");

router.post("/",(req,res)=>{
     getCommentApi.findAll(req.body,(err,data)=>{
         if(err){
                    res.send("Network error");}
          else  
                      res.send(data);      
     })
})

module.exports=router;