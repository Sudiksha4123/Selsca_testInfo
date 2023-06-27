import React from 'react';
import { Container , Box, CssBaseline } from '@mui/material';
import {Outlet, Route , Routes } from 'react-router-dom'
import AdminNavbar from './components/admin/AdminNavbar.js';
import Register from './components/admin/register/Register.js';
import { ThemeProvider} from "@mui/material";
import MainTheme from './styles/styles.js';
import Login from './components/common/Login';
import UserProfile from './components/common/UserProfile.js';
import TeacherNavbar from './components/teacher/TeacherNavbar.js';
import StudentNavbar from './components/student/StudentNavbar.js';

import GradesCenter from './components/teacher/GradesCenter.js';
import Grades from './components/student/grades.js';
import Studentcal from './components/student/studentcal.js';
import Gradesview from './components/student/gradesview.js';
import ExamDates from './components/admin/ExamDates.js';
import Syllabus from './components/teacher/Syllabus.js';
import GradesDueDateForm from './components/admin/GradesDueDates.js';
//TestInfo file in admin
import TestInfo from './components/admin/TestInfo.js';
import Attendance from './components/teacher/Attendance.js';



function App() {
  //conditionally showing the required layouts for the user 
  const AdminLayout = () => {
    return (
      <Box>
        <AdminNavbar />
        <Container sx={{ paddingLeft: 240, paddingTop: '64px' }}>
          <Outlet />
        </Container>
      </Box>
    );
  };
  
  const TeacherLayout = () => {
    return (
      <Box>
        <TeacherNavbar />
        <Container sx={{ paddingTop: '64px' }}>
          <Outlet />
        </Container>
      </Box>
    );
  };
  
  const StudentLayout = () => {
    return (
      <Box>
        <StudentNavbar />
        <Container sx={{ paddingTop: '64px' }}>
          <Outlet />
        </Container>
      </Box>
    );
  };
  

  return(

    <ThemeProvider theme={MainTheme}> 
    {/* the main theme can be found in the ./components/styles/styles.js file  */}
    <CssBaseline />
  
    <Routes>
      <Route path ='/' element={<Login />} />
      <Route path='/admin' element={<AdminLayout />}>
        <Route path='register' element={<Register />} />
        <Route path='userprofile' element={<UserProfile />} />
        <Route path='examDates' element={<ExamDates />} />
        <Route path='gradesDueDates' element={<GradesDueDateForm />} />
        <Route path='TestInfo' element={<TestInfo />} />
      </Route>
      <Route path='/teacher' element={<TeacherLayout />}>
          <Route path='userprofile' element={<UserProfile />} />
          <Route path='gradescenter' element={<GradesCenter />} />
          <Route path='syllabus' element={<Syllabus />} />
          <Route path='attendance' element={<Attendance />} />
      </Route>
      <Route path='/student' element={<StudentLayout />} >
      <Route path='userprofile' element={<UserProfile />} />
      <Route path='grades' element={<Grades />} />
      <Route path ='calender' element={<Studentcal/>} />
      <Route path='gardesview' element={<Gradesview/>}/>
      </Route>
    </Routes>

    </ThemeProvider>
    )
}

export default App;