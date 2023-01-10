const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = new Schema({

    name:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require: true
    },
    DOB:{
        type: Date,
        require: true
    },
    class: {
        type: String,
        required: true
    }
})

module.exports = Student = mongoose.model('Student' , StudentSchema);