let router = require("express").Router();
let categoriesApi = require("../api/categoriesApi");
router.post("/",(req,res)=>{
        categoriesApi.getAllCategories({},(err,data)=>{
            if(err)
                    res.send("Network error");
             else   
                    {console.log("dtaa",data);
                        res.send(data);}       
        })
})

module.exports=router;