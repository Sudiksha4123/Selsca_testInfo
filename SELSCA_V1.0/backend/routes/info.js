const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

//const GradesDueDate = require('../models/GradesDueDates');
const Attendance = require('../models/Attendance');
const Class = require("../models/Class");
const TestInfo = require('../models/TestInfo');


router.post('/getTestGrades', async (req, res) => {
  const { class: classId, studentID, subject } = req.body;

  if (!classId || !studentID || !subject) {
    return res.status(400).json({ message: "Please provide class, studentID, and subject." });
  }

  try {
    const testGrades = await Grades.find({
      studentID: studentID,
      subject: subject,
    }).populate('tests');

    if (!testGrades || testGrades.length === 0) {
      return res.status(404).json({ message: "No test grades found for the given criteria." });
    }

    // Extract the test grades from the testGrades array
    const result = testGrades.map(grade => grade.tests);

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

/*Submits Grades due dates to the attribute grades due dates in the TestInfo model 
router.post('/submitGradesDueDates' , async (req,res) => {

     const {testName,subject,date} = req.body;

     try {
       const testInfo = await TestInfo.findOne({testName : testName  , subject : subject })

     if (!testInfo) {
      console.log("Test not found");
      return res.status(404).json({ message: "Test not found. Grades due date could not be updated." });
     }
     else{
      testInfo.gradesduedate = date;
      await testInfo.save();
      res.status(200).send("Grades due date registered and updated successfully");
    }
    } catch (err) {
     console.log(err);
     res.status(500).send("Internal server error");
   }

});
*/
//New route made to save data to all test info attributes or update some
router.post('/submitTestInfo' , async (req,res) => {

  const {testName,Class,subject,date,maxScore,gradesDueDate,syllabus} = req.body;

  try {
    let testInfo = await TestInfo.findOne({testName : testName  , subject : subject });

  if (!testInfo) {
    testInfo = new TestInfo({
    testName: testName,
    class: Class,
    subject: subject,
    date: date,
    maxScore: maxScore,
    syllabus: syllabus,
    gradesDueDate: gradesDueDate
    });
  }else {
    testInfo.date = date;
    testInfo.maxScore = maxScore;
    testInfo.syllabus = syllabus;
    testInfo.gradesDueDate = gradesDueDate;
  }
  await testInfo.save();
  console.log('Test info registered');
  return res.status(201).json({ message: "Test info registered and updated successfully" 
  });
  } catch (err) {
  console.log(err);
  res.status(500).send("Internal server error");
}

});


router.post('/submitAttendance' , async (req,res) => {
  
  try {
    const studentAttendanceRecords = req.body;

    // Validate input
    if (!Array.isArray(studentAttendanceRecords)) {
      return res.status(400).json({ error: 'Input should be an array of student attendance records.' });
    }

    const savedRecords = [];
    for (const record of studentAttendanceRecords) {
      const { name, class: classNumber, month, date, status } = record;

      const newAttendance = new Attendance({
        name,
        class: classNumber,
        month,
        date,
        status,
      });

      const savedAttendance = await newAttendance.save();
      savedRecords.push(savedAttendance);
    }

    res.status(201).json({ message: 'Attendance records saved successfully.', data: savedRecords });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



//endpoints for getting a list of the students in a class 
router.post('/getClass', async (req, res) => {
  try {
    let body = {};
    if (req.body.class) {
      // Convert the class query parameter to a number
      body.class = parseInt(req.body.class, 10);
    }

    const students = await Student.find(body);
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// In your routes file, e.g., routes.js

router.get('/allClasses', async (req, res) => {
    try {
        // Fetch all the existing class names from your database
        const classes = await Class.find({}, { name: 1, _id: 0 });
        
        // Extract class names into an array
        const classNames = classes.map(cls => cls.name);

        // Return the class names as a JSON array
        res.status(200).json(classNames);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching classes', error: error.message });
    }
});



router.post('/getTestInfo', async (req, res) => {
  const { class: className, subject } = req.body;

  if (!className || !subject) {
    return res.status(400).json({ message: "Please provide class and subject." });
  }

  try {
    const classInfo = await Class.findOne({ name: className }).populate({
      path: 'tests',
      match: { subject: subject },
    });

    if (!classInfo || !classInfo.tests || classInfo.tests.length === 0) {
      return res.status(404).json({ message: "No test information found for the given criteria." });
    }

    res.status(200).json(classInfo.tests);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});


router.post("/submitSyllabus", async (req, res) => {
  const {
    testName,
    class: classId,
    subject,
    date,
    maxScore,
    syllabus,
  } = req.body;

  try {
    const testInfo = await TestInfo.findOne({
      testName: testName,
      subject: subject,
      class: classId,
    });

    if (!testInfo) {
      return res.status(404).json({ message: "Test not found. Syllabus could not be updated." });
    }

    testInfo.syllabus = syllabus;
    await testInfo.save();

    res.status(200).send("Syllabus registered and updated successfully");
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});




router.post("/test" , (req, res) => {
  res.send('working')
})
module.exports = router;