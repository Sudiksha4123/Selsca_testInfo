var express = require("express");
var router = express.Router();

const Grades = require("../models/Grades");
const Student = require("../models/Student");

router.post("/getGrades" , async (req,res) => {

    const studentIDs = req.body.studentIDs;
    const subject = req.body.subject;
    const grades = []

    for (let i= 0 ; i< studentIDs.length ; i++) {

        for (let j=0 ; j < subject.length ; j++) {
            console.log(subject[j])
            const subjectGrades = await Grades.findOne({studentID : studentIDs[i] , subject : subject[j]})
                
            if (subjectGrades) {
                console.log('found')
                grades.push(subjectGrades) 
            }
            else {
                console.log(subject[j] , 'not found')
            }        
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

router.post('/submitDates' , async (req , res) => {

    console.log(req.body.fa1Date)
    const subject = req.body[0].subject;
    const fa1Date = req.body[0].fa1Date;
    const fa2Date = req.body[0].fa2Date;
    const sa1Date = req.body[0].sa1Date;
    const fa3Date = req.body[0].fa3Date;
    const fa4Date = req.body[0].fa4Date;
    const sa2Date = req.body[0].sa2Date;



    try {
        await Grades.updateMany({subject: subject} , {
            fa1Date : fa1Date,
            fa2Date : fa2Date,
            sa1Date : sa1Date,
            fa3Date : fa3Date,
            fa4Date : fa4Date,
            sa2Date : sa2Date,
        })
        res.status(200).send('dates updated')
    }
    catch(err) {
        console.log(err)
    }
})


module.exports = router;