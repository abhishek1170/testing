let router = require("express").Router();
let commentApi = require("../api/commentApi");

    router.post("/",async (req,res)=>{
        // console.log("comment is called",req.body);
             commentApi.uploadComment(req.body,(err,data)=>{
                        if(err)
                            res.send({result:false});
                        else
                            {
                                res.send({result:true,resultdata:data});
                            }
            
    })})

module.exports=router;