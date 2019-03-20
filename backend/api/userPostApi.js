let post = require("../schema/postSchema");

const obj = {
    savePost:function(email,title,file,categories,cb)
        {
            let data = {
                email :email,
                path: "/images/"+file.originalname,
                title: title,
                time:Date.now(),
                categories:categories
                }
             post.create(data,(err,data)=>{
                    if(err)
                            cb(err,null)
                    else
                            cb(null,data)        
             })
        }
}

module.exports=obj;