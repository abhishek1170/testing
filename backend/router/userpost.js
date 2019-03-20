let router = require("express").Router();
let userPostApi = require("../api/userPostApi");
const multer = require("multer");
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"public/images");
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
})

const upload = multer({
    storage:storage
})


router.post("/",upload.single("myfile"),(req,res)=>{    
    console.log("i am in post userPost",req.body);
    userPostApi.savePost(req.body.email,req.body.title,req.file,req.body.categories,(err,data)=>{
        if(err)
            res.send("Network error");
        else
        {
            console.log("data is herer",data);
            res.send(data);    
         }
});
   

})

module.exports=router;