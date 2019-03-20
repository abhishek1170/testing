const mongoose = require('mongoose');

const schema = new mongoose.Schema(
    {
        username:{type:String},
        password:{type:String},
        email:{type:String},
        firstname:{type:String},
        lastname:{type:String}
    }
)
const userSchema = mongoose.model('userSchema',schema);

module.exports=userSchema;
