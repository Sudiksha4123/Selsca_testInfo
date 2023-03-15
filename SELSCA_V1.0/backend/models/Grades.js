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
    fa1Date : {
        type : Date
    },
    fa2 : {
        type : Number,
    },
    fa2Date : {
        type : Date
    },
    sa1 : {
        type : Number,
    },
    sa1Date : {
        type : Date
    },
    fa3 : {
        type : Number,
    },
    fa3Date : {
        type : Date
    },
    fa4 : {
        type : Number,
    },
    fa4Date : {
        type : Date
    },
    sa2 : {
        type : Number,
       
    },
    sa2Date : {
        type : Date
    },
    finalGrade : {
        type : String
    }
})

module.exports = Grades = mongoose.model('Grades' , GradesSchema);