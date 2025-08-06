const { Schema, model, default: mongoose } = require("mongoose");


const titleSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    }
},{timestamps:true})

const TitleSchema = model('title',titleSchema);
module.exports = TitleSchema;