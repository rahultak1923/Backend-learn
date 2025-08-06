const { Schema, model } = require("mongoose");

const userSchema = new Schema ({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique: true
    },
    date:{
        type:Date,
        default: Date.now
    },
},{timestamps:true});

const UserSchema = model('user',userSchema) 
// UserSchema.createIndexes();
module.exports = UserSchema;