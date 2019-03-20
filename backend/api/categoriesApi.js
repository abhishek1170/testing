let categoriesSchema = require("../schema/categoriesSchema");

const obj ={
    uploadCategories:function(obj,cb){
        categoriesSchema.create(obj,(err,data)=>{
            if(err)
                cb(err,null)
            else
                cb(null,data)    
        })
    },
    getAllCategories:function(obj,cb){
            categoriesSchema.find({},(err,data)=>{
                if(err)
                    cb(err,null)
                else
                    cb(null,data)
        })
    }    
}

module.exports=obj;