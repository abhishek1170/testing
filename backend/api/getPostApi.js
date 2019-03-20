let postSchema = require("../schema/postSchema");

const obj ={
    findPost:function(obj,cb){
        
        postSchema.find({},(err,data)=>{
                if(err)
                        cb(err,null);
                else
                        cb(null,data);        
        })
    }
}
module.exports=obj;