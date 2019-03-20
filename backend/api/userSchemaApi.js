let userSchema  = require("../schema/userSchema");


const userSchemaApiMethods={
    addUserSchema:function(obj,cb){
        console.log("add user schema",obj);
        userSchema.create(obj,(err,data)=>{
            if(err)
                cb(err,null);
            else
                cb(null,data);  
        }) 
    }
    ,

    verifyLogin:function(obj,cb){
        console.log("verify login",obj);
        userSchema.findOne(obj,(err,data)=>{
            if(err)
                    cb(err,null);
            else
                    cb(null,data);       
        })
    }
}

 module.exports=userSchemaApiMethods;



