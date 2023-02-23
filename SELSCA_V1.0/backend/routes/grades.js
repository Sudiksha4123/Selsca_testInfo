var express = require("express");
var router = express.Router();

const Grades = require("../models/Grades");
const Student = require("../models/Student");

router.post("/getGrades" , async (req,res) => {

    const studentIDs = req.body.studentIDs;
    const subject = req.body.subject;

    console.log(studentIDs ,subject)

    const grades = []

    for (let i=0 ; i < studentIDs.length ; i++) {
        console.log(studentIDs[i])
        const studentID = studentIDs[i]

        const subjectGrades = await Grades.findOne({studentID : studentID , subject : subject})

        if (subjectGrades) {
            console.log('found')
            grades.push(subjectGrades)
        }
        else {
            console.log(subject , ' not found')
        }
    }

    console.log(grades)
    res.status(200).send(grades)
    

})

router.post("/submitGrades" , async (req,res) => {
    
    const studentIDs = req.body.studentIDs;
    const subject = req.body.subject;
    const grades = req.body.grades;

    

    console.log(studentIDs , subject , grades)

    for (let key in grades) {
        try  {

            const studentID = grades[key]["studentID"]
            const fa1 = grades[key]["fa1"]
            const fa2 = grades[key]["fa2"]
            const fa3 = grades[key]["fa3"]
            const fa4 = grades[key]["fa4"]
            const sa1 = grades[key]["sa1"]
            const sa2 = grades[key]["sa2"]
            await Grades.updateOne({studentID : studentID , subject : subject} , {
                fa1 : fa1,
                fa2 : fa2,
                fa3 : fa3,
                fa4 : fa4,
                sa1 : sa1,
                sa2 : sa2,
            })
        } catch (err) {
            console.log(err)
        }
    }

    res.status(200).send("success")
})


module.exports = router;