const postSchema = require("../schema/postSchema");

const obj={
    toggleLike:function(obj,cb){
        
        postSchema.findOne({_id:obj.postId,likes:obj.email},(err,data)=>{
        if(err)
        {
            cb(err,null);
        }
        else{
            console.log("data in api",data)
            if(data==null)
            {
                postSchema.update({_id:obj.postId},{$push:{likes:obj.email}},(err,data)=>{
                        if(err)
                            {
                            cb(err,null)}
                         else
                            cb(null,data)   
                })
             }
             else
            {
                postSchema.update({_id:obj.postId},{$pull:{likes:obj.email}},(err,data)=>{
                    if(err)
                {
                        cb(err,null)}
                     else
                        cb(null,data)   
                })
            }
        }
    })
    }
}

module.exports=obj;