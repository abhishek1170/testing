let router = require("express").Router();
let getPostApi = require("../api/singlePostApi");

router.post("/",(req,res)=>{
     console.log("single post",req.body);
     getPostApi.findPost(req.body,(err,data)=>{
         if(err)
                {
                     if(err.name == 'CastError')
                     {
                          res.send("No Post found").status(404);
                     }
                     else
                     {
                          res.send("Network error");
                     }
                }
          else  
               {
                    if(data==null)
                    {
                         res.send("No Post found").status(404);
                    }
                    else
                    {
                          res.send(data);
                    }
               }
     })
})

module.exports=router;