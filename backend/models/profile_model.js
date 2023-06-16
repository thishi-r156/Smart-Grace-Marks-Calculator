const mongoose = require("mongoose")

const Schema = mongoose.Schema

const profileSchema = new Schema({
    name:{type: String, required: true},
    age: {type: Number, required: true},
    degree: {type: String,required: true },
    year: {type:Number, required: true},
    course: {type: String,required: true },
    section: {type: String,required: true },
    current_cg: {type: Number,required: true },
    passing_out: {type: Number,required: true },
    roll_no: {type: String,required: true },
    email_id: {type: String,required: true },
    personal_mail: {type:String, required:true},
    advisor: {type: String,required: true },
    dob:{type: String,required: true },
    perf: [
            {
              course_code: { type: String, required: true },
              course_name: {type:String, required:true},
              grades: { type: String, required: true },
            },
    ],
}, {timestamps:true})


module.exports = mongoose.model("Profile", profileSchema)

