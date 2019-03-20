let router = require("express").Router();
let replyApi = require("../api/replyApi");
   

router.post("/",(req,res)=>{

        replyApi.uploadReply(req.body,(err,data)=>{
            if(err)
                res.send({result:false});
             else
                res.send({result:true,dataUpload:data});   

    })
}
) 

module.exports=router;