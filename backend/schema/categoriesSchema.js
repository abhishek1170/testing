const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    categoriesName:{type:String,unique:true},
    path:String,
    numberOfPost:{type:Number,default:0},
})

const categoriesSchema = mongoose.model("categoriesSchema",Schema);

module.exports=categoriesSchema;   