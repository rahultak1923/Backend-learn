const { Schema, model } = require("mongoose");


const titleSchema = new Schema({
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