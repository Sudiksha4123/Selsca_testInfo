const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestInfoSchema = new Schema({

    testName : {
        type : String,
        required : true
    },
    class : {
        type : String,
        required : true
    },
    subject: {
        type : String,
        required : true
    } ,
    date : {
        type : Date,
        required : true
    } ,
    maxScore  : {
        type : Number,
        required : true
    },
    gradesDueDate : {
        type : Date
    } , 
    syllabus : {
        type : String
    }
})

module.exports = TestInfo = mongoose.model('TestInfo' , TestInfoSchema);