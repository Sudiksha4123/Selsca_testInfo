import { Typography , Grid , Container , Button  , Box} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const UserProfile = () => {
    const [role , setRole] = useState(localStorage.getItem("role"))
    const [user , setUser] = useState("")

    //function for checking the json web token and fetchs the user information from the backend 
    const checkLogin = async () => {
        try {
            Swal.fire({
                title: 'loading...',
                backdrop : 'true',
                allowOutsideClick : false,
            })
            Swal.showLoading();
            const res = await axios.get('http://localhost:5000/login/isUserAuth' , {
                headers : {
                    "x-access-token" : localStorage.getItem("token"),
                    "role" : role
                }
            })
            Swal.close()
            setUser(res.data.user)
            console.log(user)
        }
        catch (err) {
            Swal.fire({
                icon : "error",
                title : err.response.data.message
            })
        }
    }

    //running the fetch function on first render of the page
    useEffect(() => {
        checkLogin()
    }, [])


    return(
        <Container >
            <Grid container spacing={2} sx={{paddingTop:5}}>
            <Grid item xs={6} display="flex" justifyContent={'right'} alignItems="center">
                <Typography 
                variant="register1" 
                sx={{paddingRight:3}}
                >Name :</Typography>
            </Grid>
            <Grid item xs ={6} >
            <Typography 
                variant="register1" 
                sx={{paddingRight:3}}
                >{user.name}</Typography>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent={'right'} alignItems="center">
                <Typography 
                variant="register1" 
                sx={{paddingRight:3}} 
               >Email :</Typography>
            </Grid>
            <Grid item xs ={6}>
            <Typography 
                variant="register1" 
                sx={{paddingRight:3}} 
               >{user.email}</Typography>
            </Grid>

            {/* conditionally rendering the right components depending on the role of the user */}
            {(role === "teacher" || role === "student") &&
            <>
            <Grid item xs={6} display="flex" justifyContent={'right'} alignItems="center">
                    <Typography 
                    variant="register1" 
                    sx={{paddingRight:3}} 
                    >Date of Birth :</Typography>
                </Grid>
                <Grid item xs ={6}>
                    <Typography 
                    variant="register1" 
                   sx={{paddingRight:3}} 
                    >{user.DOB}</Typography>
                </Grid>
            </>
                
            }
            {role === "student" && 
                <>
                <Grid item xs={6} display="flex" justifyContent={'right'} alignItems="center">
                    <Typography 
                    variant="register1" 
                    sx={{paddingRight:3}} 
                    >class :</Typography>
                </Grid>
                <Grid item xs ={6}>
                    <Typography 
                    variant="register1" 
                   sx={{paddingRight:3}} 
                    >{user.class}</Typography>
                </Grid>
                </>
            }

            </Grid>
        </Container>
    )
}

export default UserProfile;