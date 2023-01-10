var express = require("express");
var router = express.Router();
var bcrypt = require('bcrypt');

//importing mongoDB models 
const Admin = require("../models/Admin");
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");

//admin registration function which hashes the given passwords and creates a new admin object in the mongoDB database
router.post("/registerAdmin" , async(req,res) => {
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password , salt);

     const admin = new Admin({
          name : req.body.name,
          email : req.body.email,
          password : hashedPassword
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
          DOB : req.body.DOB
     })

     Teacher.create(teacher)
     .then(tea => {
          res.status(200).send(tea)
     })
     .catch(err => {
          res.status(400).send(err)
     })
})

//student registration function which hashes the given passwords and creates a new student object in the mongoDB database
router.post("/registerStudent" , async(req,res) => {
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(req.body.password , salt);

     const student = new Student({
          name : req.body.name,
          email : req.body.email,
          password : hashedPassword,
          class : req.body.class,
          DOB : req.body.DOB
     })

     Student.create(student)
     .then(tea => {
          res.status(200).send(tea)
     })
     .catch(err => {
          res.status(400).send(err)
     })
})



module.exports = router;