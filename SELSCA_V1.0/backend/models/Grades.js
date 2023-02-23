const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GradesSchema = new Schema({

    studentName : {
        type : String,
        required : true
    },
    studentID : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    fa1 : {
        type : Number,
    },
    fa2 : {
        type : Number,
    },
    sa1 : {
        type : Number,
    },
    fa3 : {
        type : Number,
    },
    fa4 : {
        type : Number,
    },
    sa2 : {
        type : Number,
       
    },
    finalGrade : {
        type : String
    }
})

module.exports = Grades = mongoose.model('Grades' , GradesSchema);