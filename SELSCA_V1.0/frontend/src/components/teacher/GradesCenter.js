import React, { useEffect, useState } from "react";
import axios  from 'axios';
import { Box } from "@mui/system";
import { Button, Container, MenuItem, Select, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "./../../styles/styles.css";

const GradesCenter = () => {
    const [studentData , setStudentData] = useState({
        studentIDs : [1,2,3],
        subject : "English"
    })
    const [grades, setGrades] = useState([])
    const [subject, setSubject] = useState("English")
    const [tests , setTests] = useState(["Student Name" ,"fa1" , "fa2" , "sa1" , "fa3" , "fa4" , "sa2" , "Final Grade"])               
    const [itemKeys , setItemKeys] = useState(["studentName","fa1","fa2","sa1","fa3","fa4","sa2","finalGrade"])

    useEffect(() => {
        getGrades()
    },[])

    useEffect(() => {
        getGrades()
    } , [subject])


    const getGrades = async () => {

        setStudentData({
            studentIDs : [1,2,3],
            subject : subject
        })

        await axios.post("http://localhost:5000/grades/getGrades" , studentData)
        .then((res) => {
            console.log(res.data)
            setGrades(res.data)
        })
        .catch(err => {
            console.log(err)
        }) 
    }

    const handleChange = (e,i,item) => {

        console.log(grades[i][item])

        setGrades(s => {
            const newGrades = s.slice();
            newGrades[i][item] = e.target.value;
            return newGrades;
        })
    }

    const submitGrades = () => {
        console.log(grades)

        Swal.fire({
            title: "Please Wait",
            text : "Uploading",
            backdrop: "true"
        })
        Swal.showLoading()


        const gradesData = {
            studentIDs : studentData["studentIDs"],
            subject : subject,
            grades : grades
        }

        axios.post("http://localhost:5000/grades/submitGrades" , gradesData)
        .then( res => {
            Swal.close()
                    Swal.fire({
                        icon : 'success',
                        title : 'Grades successfully submitted!'
                    }).then(function() {
                        window.location.reload(false);
                    })
        })
        .catch(err => {
            console.log(err)
            Swal.fire({
                icon : 'error',
                title : err.response.data.message
            })
        })
        console.log(gradesData)
    }
    
    
    return(
        
        <>
        <Box sx={{border: 3 , borderRadius: '8px', borderColor: "#333333" , maxheight: "50 vh" , overflow:"auto"}}>
        <Container sx={{paddingTop :"10px"}}>

            <Select value={subject} 
            label="Subject"
            onChange={(e) => {setSubject(e.target.value)}}>
                <MenuItem value="English">English</MenuItem>
                <MenuItem value="Maths">Maths</MenuItem>
                <MenuItem value="Science">Science</MenuItem>
                <MenuItem value="Hindi">Hindi</MenuItem>
                <MenuItem value="Social">Social</MenuItem>
            </Select>
            <Button sx={{paddingLeft : '10px'}} onClick={getGrades} >get grades</Button>
        </Container>


            <table style={{padding : '20px'}}>
                <tr>
                    {tests.map((item,i) => (
                        <th key={i} >
                            <Typography variant="h5" sx={{color :"#333333" ,width:100}} >
                                    {item}
                            </Typography> 
                        </th>
                    ))}
                </tr>
                <tbody>
                {grades.map((mainitem,i) => (
                    <tr key={i} >
                            {itemKeys.map((item,j) => {
                                
                                if ( itemKeys[j] === "studentName") {
                                    return (
                                        
                                        <td style={{width:150, textAlign:'center' , backgroundColor:"#d1d1d1"}}>
                                            <Typography variant="overline" 
                                                sx={{color:"#333333",
                                                alignItems:"center",
                                            }}
                                            >
                                                {mainitem[item]}
                                            </Typography>
                                        </td>
                                    )} else {   
                                        return(
                                            
                                            <td>
                                                <TextField
                                                type="number"
                                                id={j}
                                                label={mainitem[item]}
                                                variant="outlined"
                                                onChange={(e) => handleChange(e,i,item)}
                                                InputLabelProps={{
                                                    sx: {
                                                    color: "#07b86c"
                                                    }
                                                }}/>
                                    </td>
                                    )}
                                }
                                )}
                        </tr>
                    ))}
                </tbody>
            </table>
            </Box>
            <Container >
            <Button sx={{paddingTop:"20px"}} onClick={submitGrades} > submit grades</Button>
            </Container>
            </>

)

}

export default GradesCenter;