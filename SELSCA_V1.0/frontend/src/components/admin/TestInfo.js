//New component for updating test info as an admin
import React, { useEffect, useState } from "react";
import {  Typography,  Grid,  TextField, Button,  MenuItem,  Select,  Table,TableHead,  TableRow,TableBody,   TableCell,FormControl,  InputLabel,  Box,  Card,  CardContent,} from "@mui/material";
import { makeStyles } from "@mui/styles";
import swal from "sweetalert2";
import axios from "axios";

const useStyles = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "20px",
    "& .MuiTextField-root": {
      marginBottom: "10px",
    },
  },
  tableContainer: {
    marginTop: "30px",
  },
});

function TestInfo() {
  const classes = useStyles();
  const [testName, setTestName] = useState("");
  const [Class, setClass] = useState("");
  const [subject, setSubject] = useState("");
  const [date, setDate] = useState("");
  const [maxScore, setMaxScore] = useState("");
  const [gradesDueDate, setGradesDueDate] = useState([]);
  const [syllabus, setSyllabus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!testName || !subject || !date || !maxScore || !Class) {
      swal.fire({
        title: "Please fill out all required fields",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    try {
      await axios.post("http://localhost:5000/info/submitTestInfo", {
        testName,
        Class,
        subject,
        date,
        maxScore,
        gradesDueDate,
        syllabus
      });
      swal.fire({
        title: "Test Info submitted successfully",
        icon: "success",
        confirmButtonText: "OK",
      });
      setTestName("");
      setSubject("");
      setDate("");
    } catch (err) {
      swal.fire({
        title: "Error submitting Test Info",
        text: err.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

 

  

  return (
    <>
      <Box mt={4}>
        <Typography variant="h4" align="center" gutterBottom>
          Test Info
        </Typography>
      </Box>
      <Card>
        <CardContent>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
        <Typography variant="subtitle1" gutterBottom>
          Test Name:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
      <Select
      labelId="test-select-label"
      id="test-select"
    value={testName}
    onChange={(e) => setTestName(e.target.value)}
    variant="outlined"
    >
      <MenuItem value="fa1">fa1</MenuItem>
      <MenuItem value="fa2">fa2</MenuItem>
      <MenuItem value="sa1">sa1</MenuItem>
      <MenuItem value="fa3">fa3</MenuItem>
      <MenuItem value="fa4">fa4</MenuItem>
      <MenuItem value="sa2">sa2</MenuItem>
    </Select>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="subtitle1" gutterBottom>
          Class:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
      <Select
      labelId="class-select-label"
      id="class-select"
    value={Class}
    onChange={(e) => setClass(e.target.value)}
    variant="outlined"
    >
      <MenuItem value="A">A</MenuItem>
      <MenuItem value="B">B</MenuItem>
      <MenuItem value="C">C</MenuItem>
      <MenuItem value="D">D</MenuItem>
      
    </Select>
      </Grid>
      
      <Grid item xs={12} sm={4}>
        <Typography variant="subtitle1" gutterBottom>
          Subject:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
      <Select
            labelId="subject-select-label"
            id="subject-select"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            variant="outlined"
          >
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Maths">Maths</MenuItem>
            <MenuItem value="Hindi">Hindi</MenuItem>
            <MenuItem value="Social">Social</MenuItem>
            <MenuItem value="Science">Science</MenuItem>
          </Select>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Typography variant="subtitle1" gutterBottom>
          Date:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          label="Date"
          type="date"
          variant="outlined"
         
          value={date}
          onChange={(e) => setDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
        <Grid item xs={12} sm={4}>
        <Typography variant="subtitle1" gutterBottom>
          maxScore:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          label="maxScore"
          type="Number"
          variant="outlined"
          singleline
          rows={4}

         

          value={maxScore}
          onChange={(e) => setMaxScore(e.target.value)}
          InputLabelProps={{
        
          }}
        />
        </Grid>
        <Grid item xs={12} sm={4}>
        <Typography variant="subtitle1" gutterBottom>
          Grades Due Date:
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <TextField
          label="gradesDueDate"
          type="date"
          variant="outlined"

          value={gradesDueDate}
          onChange={(e) => setGradesDueDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>

      <Grid item xs={12} sm={8}>
      <Typography variant="subtitle1" gutterBottom>
        Syllabus:
      </Typography>
      </Grid>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="syllabus"
            type="string"
            multiline
            rows={4}
            variant="outlined"
            fullWidth

            value={syllabus}
            onChange={(e) => setSyllabus(e.target.value)}
            InputLabelProps={{
            
            }}
          />
        </Grid>
      </Grid>

    
      <Grid item xs={12}>
        <Button variant="contained"  sx={{ mt: 2  , alignItems: "center"}} type="submit">
          Submit
        </Button>
      </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
      
    </>
  );
}

export default TestInfo;

