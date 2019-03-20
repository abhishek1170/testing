let router = require("express").Router();
let likeApi = require("../api/likeApi");

router.post("/",(req,res)=>{
    console.log("res>> getlike",req.body);
    likeApi.toggleLike(req.body,(err,data)=>{
        console.log("in get like",err,"    ",data);
        if(err)
            res.send({result:false});
        else
            res.send({result:true});    
    })     
})

module.exports=router;