const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({

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
    DOB :{
        type: Date,
        require: true
    },
})

module.exports = Teacher = mongoose.model('Teacher' , TeacherSchema);