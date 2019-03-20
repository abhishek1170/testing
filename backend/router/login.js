let router = require("express").Router();
let api = require("../api/userSchemaApi");

router.post("/",(req,res)=>{
    console.log("login at backend",req.body);
    api.verifyLogin(req.body,(err,data)=>{
        if(err)
            res.send({result:"Network error"});
         else
        {
            console.log("data",data);
            if(data==null)
            {
            console.log("data invalid",data);

                res.send({result:false})
            }
            else
            {
            console.log("valid",data);

                res.send({result:true,data});   
            }
        }  
      })
})

module.exports=router;