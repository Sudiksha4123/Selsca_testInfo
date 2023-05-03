import React, { useEffect, useState , useCallback} from "react";
import axios from "axios";
import { Box } from "@mui/system";
import { Button, Container, MenuItem, Select, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "./../../styles/styles.css";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


const GradesCenter = () => {
    const [studentData, setStudentData] = useState({
        studentIDs: [1, 2, 3],
        subjects: ["English"],
        class: "6",
    });
    const [grades, setGrades] = useState([]);
    const [subject, setSubject] = useState(["English"]);
    const [classValue, setClassValue] = useState("");
    const [tests, setTests] = useState([]);
    const [itemKeys, setItemKeys] = useState([]);
    const [addTestDialogOpen, setAddTestDialogOpen] = useState(false);
    const [allClasses, setAllClasses] = useState([]);
    const [testName, setTestName] = useState("");
    const [maxScore, setMaxScore] = useState(0);
    const [date, setDate] = useState("");
    const [newSubject , setNewSubject] =useState()


    


    const getGrades = async () => {
        setStudentData({
            studentIDs: [1, 2, 3], // assuming this is hardcoded for testing purposes
            subjects: subject
        });
    
        // Fetch the grades based on student IDs and subject
        await axios.post("http://localhost:5000/grades/getGrades", studentData)
            .then((res) => {
                console.log(res.data);
    
                // Extract the tests information from the first student's data
                const testsData = res.data[0].tests;
    
                // Update the tests and itemKeys arrays based on the received test information
                const newTests = ["Student Name"].concat(testsData.map(test => test.testName), "Final Grade");
                const newItemKeys = ["studentName"].concat(testsData.map(test => test.testName), "finalGrade");
                setTests(newTests);
                setItemKeys(newItemKeys);
    
                // Format the response data into an array of objects
                const formattedGrades = res.data.map(student => {
                    const gradeObj = {
                        studentID: student.studentID, // Add this line to include the studentID
                        studentName: student.studentName,
                        finalGrade: student.finalGrade
                    };
                    newItemKeys.forEach(itemKey => {
                        if (itemKey !== 'studentName' && itemKey !== 'finalGrade') {
                            const test = student.tests.find(test => test.testName === itemKey);
                            if (test) {
                                gradeObj[itemKey] = test.score;
                            } else {
                                gradeObj[itemKey] = ""; // Set the value to an empty string or any default value for missing tests
                            }
                        }
                    });
                    return gradeObj;
                });
                
    
                // Update the grades state object with the formatted data
                console.log("formatted grades : ", formattedGrades);
                setGrades(() => formattedGrades);
                console.log(grades);
            })
            .catch(err => {
                console.log(err);
            });
    };
    
      
      
    

    const handleChange = useCallback((e, i, item) => {
        const newValue = parseFloat(e.target.value);
        if (isNaN(newValue)) {
            return;
        }
    
        setGrades(s => {
            const newGrades = s.slice();
            newGrades[i][item] = newValue;
            return newGrades;
        });
    }, []);
    
    

    // 
    
    const submitGrades = () => {
        console.log(grades);
    
        Swal.fire({
            title: "Please Wait",
            text: "Uploading",
            backdrop: "true"
        });
        Swal.showLoading();
    
        const formattedGrades = grades.map(grade => {
            const studentID = grade.studentID;
            const tests = itemKeys.filter(key => key !== 'studentName' && key !== 'finalGrade')
                .map(key => {
                    return {
                        testName: key,
                        score: grade[key]
                    };
                });
    
            return {
                studentID: studentID,
                tests: tests
            };
        });
    
        const gradesData = {
            studentIDs: studentData["studentIDs"],
            subject: subject,
            class: classValue,
            grades: formattedGrades,
        };

        console.log(gradesData)
    
        axios.post("http://localhost:5000/grades/submitGrades", gradesData)
            .then(res => {
                Swal.close();
                Swal.fire({
                    icon: 'success',
                    title: 'Grades successfully submitted!'
                }).then(function () {
                    window.location.reload(false);
                });
            })
            .catch(err => {
                console.log(err);
                Swal.fire({
                    icon: 'error',
                    title: err.response.data.message
                });
            });
        console.log(gradesData);
    };

    const handleAddTest = async () => {
        try {
            const response = await axios.post("http://localhost:5000/register/registerTest", {
                testName : testName,
                className: classValue,
                subject : subject,
                maxScore : maxScore,
                date : date,
            });
    
            if (response.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Test added successfully",
                    showConfirmButton: false,
                    timer: 1500,
                });
                getGrades();
                setAddTestDialogOpen(false);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Error adding test",
                    text: "Something went wrong",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error adding test",
                text: error.message,
            });
            console.error("Error adding test:", error);
        }
    };

    const fetchClasses = async () => {
        try {
            const response = await axios.get("http://localhost:5000/info/allClasses");
            setAllClasses(response.data);
        } catch (error) {
            console.error("Error fetching classes:", error);
        }
    };

    useEffect(() => {
        fetchClasses();
        console.log(allClasses)
    }, []);
    
    
    
    
    
    

    return (
        <>
            <Box sx={{ border: 3, borderRadius: '8px', borderColor: "#333333", maxHeight: "50vh", overflow: "auto" }}>
                <Container sx={{ paddingTop: "10px" }}>

                <Select value={classValue}
                    label="Class"
                    onChange={(e) => { setClassValue(e.target.value) }}>
                    {allClasses.map((className, index) => (
                        <MenuItem key={index} value={className}>{className}</MenuItem>
                    ))}
                </Select>


                    <Select value={subject}
                        label="Subject"
                        onChange={(e) => { setSubject([e.target.value]) }}>
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="Maths">Maths</MenuItem>
                        <MenuItem value="Science">Science</MenuItem>
                        <MenuItem value="Hindi">Hindi</MenuItem>
                        <MenuItem value="Social">Social</MenuItem>
                    </Select>
                    <Button sx={{ paddingLeft: '10px' }} onClick={getGrades} >get grades</Button>
                </Container>

                <table style={{ padding: '20px' }}>
                    <tr>
                    {tests.map((item, i) => (
                        <>
                            <th key={item}>
                                <Typography variant="h5" sx={{ color: "#333333", width: 100 }}>
                                    {item}
                                </Typography>
                            </th>
                        </>
                    ))}

                        <th>
                        <Container >
                            <Button onClick={() => setAddTestDialogOpen(true)}>Add Test</Button>
                        </Container>

                        <Dialog open={addTestDialogOpen} onClose={() => setAddTestDialogOpen(false)}>
                            <DialogTitle>Add a new test</DialogTitle>
                            <DialogContent>
                                <DialogContentText>
                                    Enter the relevant information for the new test.
                                </DialogContentText>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="testName"
                                    label="Test Name"
                                    type="text"
                                    fullWidth
                                    value={testName}
                                    onChange={(e) => setTestName(e.target.value)}
                                />
                                <br></br>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="maxScore"
                                    label="Max Score"
                                    type="Number"
                                    fullWidth
                                    value={maxScore}
                                    onChange={(e) => setMaxScore(e.target.value)}
                                />
                                <br></br>
                                <TextField
                                    autoFocus
                                    margin="dense"
                                    id="date"
                                    type="Date"
                                    fullWidth
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                

    
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={() => setAddTestDialogOpen(false)} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleAddTest} color="primary">
                                    Add Test
                                </Button>
                            </DialogActions>
                        </Dialog>
                        </th>
                    </tr>
                    <tbody>
                    {grades.map((mainitem, i) => (
    <tr key={i}>
        {itemKeys.map((item, j) => {
            if (itemKeys[j] === "studentName") {
                return (
                    <td key={`${i}-${j}`} style={{ width: 150, textAlign: 'center', backgroundColor: "#d1d1d1" }}>
                        <Typography variant="overline"
                            sx={{
                                color: "#333333",
                                alignItems: "center",
                            }}
                        >
                            {mainitem[item]}
                        </Typography>
                    </td>
                );
            } else {
                return (
                    <td key={`${i}-${j}`}>
                        <TextField
                            type="number"
                            id={`${i}-${item}`} // Update the id attribute here
                            value={mainitem[item]}
                            variant="outlined"
                            onChange={(e) => handleChange(e, i, item)}
                            InputLabelProps={{
                                sx: {
                                    color: "#07b86c"
                                }
                            }} />
                    </td>
                );
            }
        })}
    </tr>
))}

                    </tbody>
                </table>
            </Box>
            <Container >
                <Button sx={{ paddingTop: "20px" }} onClick={submitGrades} > submit grades</Button>
                <Button onClick={() => {console.log(grades)}} >show grades</Button>
            </Container>
        </>
    );
}

export default GradesCenter;

