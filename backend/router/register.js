let router = require("express").Router();
let userApiSchema = require("../api/userSchemaApi");


    router.post("/",async (req,res)=>{
             userApiSchema.addUserSchema(req.body,(err,data)=>{
                        if(err)
                            res.send({result:"Network error"});
                        else
                            {
                                console.log("data cb wla ",data);
                                res.send({result:"register sucessfuly"});
                            }
            
    })})

module.exports=router;