import { Button, Grid, OutlinedInput, Select, TextField, Typography , MenuItem } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import "./../../styles/styles.css";

const ExamDates = () => {
    const [dates , setDates] = useState([{

    }])

    const Change = (e,exam) => {

        if (!dates[0][exam]) {
            console.log('not found')
            setDates(s => {
                const newDates = s.slice();
                newDates[0][exam] = e.target.value;
                return newDates;
            })
        }
        else {
            console.log('found')   
            setDates(s => {
                const newDates = s.slice();
                newDates[0][exam] = e.target.value;
                return newDates;
            })
        }
        console.log(dates[0])
    }
    

    const OnSubmit = async () => {

        if (!dates[0]['subject']) {
            Swal.fire({
                icon: 'warning',
                text: 'Please select subject'
            })
            return
        } else 
        {
            Swal.fire({
                title: "Please Wait",
                text : "Uploading",
                backdrop: "true"
            })
            Swal.showLoading()
            console.log('subject found!')
            try {
                const response = axios.post('http://localhost:5000/grades/submitDates' , dates)
                console.log(response)
                Swal.close()
                    Swal.fire({
                        icon : 'success',
                        title : 'Dates successfully updated'
                    })
                    
            }
            catch (err) {
                Swal.fire({
                    icon : 'error',
                    title : err.response.data.message
                })
            }
        }
        

    }

    return(
        <>
        <Container >
        <Grid container>
        <Grid item xs ={6} className="spacedGrid" justifyContent="right" >
        <Typography >Subject : </Typography>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="left" >
        <Select className="primarySelect"
        onChange={(e) => Change(e,'subject')}>
                        <MenuItem value="English">English</MenuItem>
                        <MenuItem value="Maths">Maths</MenuItem>
                        <MenuItem value="Hindi">Hindi</MenuItem>
                        <MenuItem value="Social">Social</MenuItem>
                        <MenuItem value="Science">Science</MenuItem>
        </Select>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="right" >
        <Typography >FA1 : </Typography>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="left">
        <TextField type="date" onChange={(e) => Change(e,'fa1Date')}></TextField>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="right">
        <Typography >FA2 : </Typography>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="left">
        <TextField type="date" onChange={(e) => Change(e,'fa2Date')}></TextField>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="right">
        <Typography >SA1 : </Typography>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="left">
        <TextField type="date" onChange={(e) => Change(e,'sa1Date')}></TextField>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="right">
        <Typography >FA3 : </Typography>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="left">
        <TextField type="date" onChange={(e) => Change(e,'fa3Date')}></TextField>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="right">
        <Typography >FA4 : </Typography>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="left">
        <TextField type="date" onChange={(e) => Change(e,'fa4Date')}></TextField>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="right">
        <Typography >SA2 : </Typography>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="left">
        <TextField type="date" onChange={(e) => Change(e,'sa2Date')}></TextField>
        </Grid>
        <Grid item xs ={6} className="spacedGrid" justifyContent="right">
        <Button onClick={OnSubmit}>submit</Button>
        </Grid>
        </Grid>
        </Container>
        </>
    )
}

export default ExamDates;