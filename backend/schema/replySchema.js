const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    commentId:String,
    email : String,
    Reply:String,
    time:Date,
})

const replySchema = mongoose.model("replySchema",Schema);

module.exports=replySchema;   