let postSchema = require("../schema/postSchema");
let mongoose = require("mongoose");
const obj ={
    findPost:function(obj,cb){

        postSchema.findOne(obj,(err,data)=>{
                if(err)
                    {
                       cb(err,null);
                    }
                else
                    { 
                        cb(null,data);
                    }
        })
    }
}
module.exports=obj;