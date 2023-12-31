const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    studentID : {
        type : String,
        required : true
    },
    DOB:{
        type: Date,
    },
    class: {
        type: String,
        required: true
    }
})

module.exports = Student = mongoose.model('Student' , StudentSchema);