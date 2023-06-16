const mongoose = require("mongoose")

const Schema = mongoose.Schema


const RequestSchema = new Schema({
    name:{type: String, required: true},
    roll_no:{type: String, required: true},
    request:{type: String, required: true},
}, {timestamps:true})

module.exports = mongoose.model("Request", RequestSchema)
