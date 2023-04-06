const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const GradesDueDate = require('../models/Dates');


router.post('/getGradesDueDates', async (req, res) => {
    const subject = req.body.subject;
  
    console.log(subject)
    try {
      const gradesDueDates = await GradesDueDate.find({ subject: subject });
      console.log(gradesDueDates)
  
      if (!gradesDueDates || gradesDueDates.length === 0) {
        console.log('grades due date not found')
        return res.status(404).json({ message: "Grades due date not found" });
      }
      return res.status(200).json(gradesDueDates);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal server error" })
    }
  })

router.post('/submitGradesDueDates' , async (req,res) => {

    const {testName , subject, date} = req.body;

    try {
        let gradesDueDate = await GradesDueDate.findOne({testName : testName, subject : subject});

        if (!gradesDueDate) {
            gradesDueDate = new GradesDueDate({testName : testName , subject : subject , date : date}); 
        } else {
            gradesDueDate.date = date;
        }

        await gradesDueDate.save();
        console.log('grades registered')
        return res.status(201).json({ message : "Grades due date registered successfully"})
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({message : "Internal server error"})
    }
})

module.exports = router;