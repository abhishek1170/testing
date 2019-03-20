const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    postId:String,
    email : String,
    Comment:String,
    time:Date,
})

const commentSchema = mongoose.model("commentSchema",Schema);

module.exports=commentSchema;   