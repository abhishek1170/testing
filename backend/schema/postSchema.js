const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    email : String,
    path:String,
    title: String,
    time: Date,
    categories:String,
    likes:{type:Array,default:[]}
})

const postSchema = mongoose.model("postSchema",Schema);

module.exports=postSchema;