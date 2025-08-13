const { Schema, model } = require("mongoose");


const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    date:{
        type: Date,
        default: Date.now,
    }
},{ timestamps: true }
)
const UserSchema = model("User", userSchema);
module.exports = UserSchema;