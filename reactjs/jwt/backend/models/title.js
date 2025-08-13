const { Schema, default: mongoose, model } = require("mongoose");


const titleSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
})
const TitleSchema = model("Title", titleSchema);
module.exports = TitleSchema;