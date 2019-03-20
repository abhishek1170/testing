let router = require("express").Router();
let multer = require("multer");
let categoriesApi = require("../api/categoriesApi");

let storage = multer.diskStorage(
    {
        destination:(req,file,cb)=>{
            cb(null,"public/images")
        },
        filename:(req,file,cb)=>{
            cb(null,file.originalname);
        }
    }
)
let upload = multer(
    {
        storage:storage
    }
)


router.post("/",upload.single("myfile"),(req,res)=>{
             categoriesApi.uploadCategories({
                 categoriesName:req.body.Categories,
                 path:req.file.originalname
             },(err,data)=>{
                if(err)
                        res.send({result:false});
                else
                    {
                        res.send({result:true,resultdata:data});
                    }     
    })
})
module.exports=router;