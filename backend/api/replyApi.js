let replySchema = require("../schema/replySchema");

const obj ={
    uploadReply:function(obj,cb){
        replySchema.create(obj,(err,data)=>{
            if(err)
                cb(err,null);
            else
                cb(null,data);    
        })
    }
    ,
    getReply:function(obj,cb){
        replySchema.find(obj,(err,data)=>{
            if(err)
                cb(err,null);
            else
                cb(null,data);    
        })
    }
}
module.exports=obj