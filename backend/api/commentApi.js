let commentSchema = require("../schema/commentSchema");

const obj ={
    uploadComment:function(obj,cb){
        commentSchema.create(obj,(err,data)=>{
                if(err)
                        cb(err,null);
                else
                        cb(null,data);        
        })
    }
        ,
     findAll:function(obj,cb){
         commentSchema.find(obj,(err,data)=>{
             if(err)
                    cb(err,null)
             else   
                    cb(null,data)       
         })
     }   
    
}
module.exports=obj;