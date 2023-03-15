var express = require("express");
var router = express.Router();
var bcrypt = require('bcrypt');

//importing mongoDB models 
const Admin = require("../models/Admin");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const Headmaster = require("../models/Headmaster");
const Grades = require("../models/Grades");

//admin registration function which hashes the given passwords and creates a new admin object in the mongoDB database
router.post("/registerAdmin" , async(req,res) => {
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password , salt);

     const admin = new Admin({
          name : req.body.name,
          email : req.body.email,
          password : hashedPassword,
          aadhar : req.body.aadhar,
          address : req.body.address,
          gender : req.body.gender,
     })

     Admin.create(admin)
     .then(adm => {
          res.status(200).send(adm)
     })
     .catch(err => {
          res.status(400).send(err)
     })
})

//teacher registration function which hashes the given passwords and creates a new teacher object in the mongoDB database
router.post("/registerTeacher" , async(req,res) => {
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password , salt);

     const teacher = new Teacher({
          name : req.body.name,
          email : req.body.email,
          password : hashedPassword,
          aadhar : req.body.aadhar,
          DOB : req.body.DOB,
          address : req.body.address,
     })

     Teacher.create(teacher)
     .then(tea => {
          res.status(200).send(tea)
     })
     .catch(err => {
          res.status(400).send(err)
     })
})


router.post('/registerHeadmaster' , async (req,res) => {
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password , salt);

     const headmaster = new Headmaster({
          name: req.body.name,
          email : req.body.email,
          password : hashedPassword,
          aadhar : req.body.aadhar,
          DOB : req.body.DOB,
          address : req.body.address,
          gender : req.body.gender,
     })
     
     Headmaster.create(headmaster)
     .then(hea => {
          res.status(200).send(hea)
     })
     .catch(err => {
          res.status(400).send(err)
     })
})

//student registration function which hashes the given passwords and creates a new student object in the mongoDB database
router.post("/registerStudent" , async(req,res) => {
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password , salt);
     const subjects = ["English" , "Maths" , "Science" , "Hindi" , "Social"]

     const student = new Student({
          name : req.body.name,
          email : req.body.email,
          aadhar : req.body.aadhar,
          password : hashedPassword,
          class : req.body.class,
          DOB : req.body.DOB
     })

     
     for (let i=0; i < subjects.length ; i++) {
          subject = subjects[i];
          console.log(subject)
          
          const newGrades = new Grades({
               studentName : req.body.name,
               studentID : req.body.aadhar,
               subject : subject,
               fa1 : null,
               fa1Date : null,
               fa2 : null,
               fa2Date : null,
               sa1: null,
               sa1Date : null,
               fa3 : null,
               fa3Date : null,
               fa4 : null,
               fa4Date : null,
               sa2 : null,
               sa2Date : null,
               finalGrade : null
          })
          
          Grades.create(newGrades)
          .then(gra => {
               console.log("grades successfully registered")
          })
          .catch(err => {
               console.log(err)
          })
          
     }
     
     Student.create(student)
     .then(stu => {
          res.status(200).send(stu)
     })
     .catch(err => {
          console.log(err)
          res.status(400).send(err)
     })
     


})



module.exports = router;