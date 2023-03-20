import { AppBar, IconButton, Toolbar , List , Drawer , ListItem, ListItemText , Container , Button } from "@mui/material";
import React, { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from "react-router-dom";

const TeacherNavbar = () => {
    const navigate = useNavigate();
    const [isDrawerOpen , setisDrawerOpen] = useState(false)

    //this list controls the items that will show up in the drawer once the app bar button is clicked 
    //if a new route is being added with a new button , simply add an object to the list in the same format and the navigate() link 
    //and the button will show in the drawer
    const itemsList = [
        {
            text:"User Profile",
            onClick : () => {navigate('/teacher/userprofile')
                            setisDrawerOpen(false)}
        },
        {
            text:"Grades Center",
            onClick : () => {navigate('/teacher/gradescenter')
                            setisDrawerOpen(false)}
        },
        {
            text:"Syllabus Portal",
            onClick : () => {navigate('/teacher/syllabus')
                            setisDrawerOpen(false)}
        },
        
    ]
    
    return (
        <AppBar position="static" sx={{ backgroundColor: '#d9d9d9' }} >
            <Toolbar>
                <IconButton
                size = "large" edge="start"
                onClick={() => {setisDrawerOpen(true)}}>
                    <MenuIcon />
                </IconButton>
                <Drawer anchor="left" 
                open={isDrawerOpen}
                onClose={() => {setisDrawerOpen(false)}}>
                    <Container >
                        <List>
                            {
                                itemsList.map((item , i) => {
                                    const {text , onClick} = item
                                    return(
                                        <ListItem button key={text} onClick={onClick}>
                                            <ListItemText primary={text} />
                                        </ListItem>
                                    )
                                })
                            }
                        </List>
                    </Container>

                </Drawer>
                {/* the logout button which will clear all items stored in local storage and navigate to the login page */}
                <Button sx={{marginLeft:'auto'}} color="primary"
                onClick={() => {
                    localStorage.clear();
                    navigate('/')
                }}
                >Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default TeacherNavbar;