let router = require("express").Router();
let getPostApi = require("../api/getPostApi");

router.post("/",(req,res)=>{
     getPostApi.findPost(req.body,(err,data)=>{
         if(err)
                res.send("Network error");
          else  
                     res.send(data);      
     })
})

module.exports=router;