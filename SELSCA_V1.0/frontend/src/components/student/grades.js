import React ,{ useState , useEffect} from 'react';
import {
Button,Typography,Box, Grid} from '@mui/material';
import axios from 'axios';
import Capsulestyle from '../common/Capsule';
import { spacing } from '@mui/system';


const CircleWithFullLine = ({ upMark, downMark, isLarge, label }) => {
    const size = isLarge ? 120 : 80;
    const circleStyle = {
      width: isLarge ? '100px' : '80px',
      height: isLarge ? '100px' : '80px',
      borderRadius: '50%',
      backgroundColor: 'white',
      border : '2px solid black',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: isLarge ? '20px' : '10px',
    };

const lineStyle = {
width: '100%',
height: '2px',
backgroundColor: 'black ',
position: 'absolute',
left: 0,
top: '50%',
transform: 'translateY(-50%)',
};

const topMarkStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    position: 'absolute',
    top: 'calc(50% - 30px)',
    left: 'calc(50% - 15px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black', 
  };

  const bottomMarkStyle = {
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    position: 'absolute',
    bottom: 'calc(50% - 30px)',
    left: 'calc(50% - 15px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black', // added color property
  };

return (
<div style={circleStyle}>
<div style={lineStyle}></div>
<div style={topMarkStyle}>{upMark}</div>
<div style={bottomMarkStyle}>{downMark}</div>
<div style={{ position: 'absolute', bottom: '-30px', textAlign: 'center', width: '100%', color:'black' }}>
{label}
</div>
</div>
);
};


const capsuleStyle= {
  position: 'relative',
  display: 'inline-block',
  borderRadius: '50px',
  backgroundColor: '#f0f0f0',
  padding: '50px 100px',
  fontSize: '16px',
  color: '#000',
  textAlign: 'center',
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  lineHeight: '1.5',
  verticalAlign: 'middle',
  border: '2px solid #000',
  boxSizing: 'border-box'
};

const lineStyle = {
  position: 'absolute',
  top: '50%',
  left: '25%',
  width: '75%',
  height: '2px',
  backgroundColor: '#000',
  // fontWeight: 'bold',
};
const topSectionStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  height: '50%',
  background: 'linear-gradient(to left, #D5E8D4 75%, #f0f0f0 50%)',
  borderRadius: '50px 50px 0 0',
};
const topSectionStyleforAbsent = {
  position: 'absolute',
  top: '0',
  left: '0',
  right: '0',
  height: '50%',
  background: 'linear-gradient(to left, #F8CECC 75%, #f0f0f0 50%)',
  borderRadius: '50px 50px 0 0',
  fontWeight: 'bold'
  
};
const fulllineStyle = {
  position: 'absolute',
  top: '50%',
  left: '0',
  width: '100%',
  height: '2px',
  backgroundColor: '#000',
  fontWeight: 'bold',
};

const bottomSectionStyle = {
  position: 'absolute',
  top: '50%',
  left: '0',
  right: '0',
  height: '50%',
  background:  '#D5E8D4',
  borderRadius: '0 0 50px 50px',
};
const bottomSectionStyleforAbsent = {
  position: 'absolute',
  top: '50%',
  left: '0',
  right: '0',
  height: '50%',
  background:  '#F8CECC' ,
  borderRadius: ' 0 0 50px 50px ',
  fontWeight: 'bold',
  textAlign:'center'
  
};
const bottomSectionStyleforGrade = {
  position: 'absolute',
  top: '50%',
  left: '0',
  right: '0',
  height: '50%',
  background:  '#F9D39A' ,
  borderRadius: ' 0 0 50px 50px ',
  fontWeight: 'bold',
  textAlign:'center'
  
};


const verticalLineStyle = {
  position: 'absolute',
  top: '0',
  left: '25%',
  width: '2px',
  height: '100%',
  backgroundColor: '#000',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '18px'
};

const assessmentStyle = {
  position: 'absolute',
  top: '50%',
  left: '1',
  transform: 'translate(-50%, -50%)',
  fontSize: '15px',
  fontWeight: 'bold',
  textAlign: 'left',
  paddingLeft: '10px',
  whiteSpace: 'nowrap',
  marginRight: '20px' // Add margin-right here
};

const dateStyle = {
  position: 'absolute',
  top: '22%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '14px',
  fontWeight: 'bold',
};

const date = "2023-02-27";
const score = "25";
const assessment = "FA-1";
const stage = 'Finals';






const Grades = () => {

  useEffect(() => {
    getGrades()
  } , []) 

  const [studentData , setStudentData] = useState({
    studentIDs : [1],
    subject : ["English","Maths","Hindi","Science"]
  })
  
  const [subject , setSubject] = useState(["English","Maths","Hindi","Science"])
  const [grades , setGrades] = useState(["fa1","fa2","sa1","fa3","fa4","sa2"])
  
  const getGrades = async () => {
  
    setStudentData({
        studentIDs : [1],
        subject : [subject]
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


return (

<div>
  
<Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '50px 0' }}>
  <Grid container spacing={5}>
    {grades.map((item, i) => {
      return (
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', margin: '20px', spacing:'5px', flexDirection: { xs: 'column', sm: 'row' } }}>
            <Typography variant="h4" component="h1" color="black" display={'flex'} sx={{ width: { xs: '100%', sm: '120px' }, marginRight: { xs: '0', sm: '30px' } }}>
              {subject[i]}
            </Typography>
            <CircleWithFullLine upMark={grades[i]["fa1"]} downMark="100" label="FA 1" marginleft={{ xs: '0', sm: '40px' }} />
            <CircleWithFullLine upMark={grades[i]["fa2"]} downMark="100" label="FA 2"/>
            <CircleWithFullLine upMark={grades[i]["sa1"]} downMark="100" label="SA 1" isLarge="SA 1" />
            <CircleWithFullLine upMark={grades[i]["fa3"]} downMark="100" label="FA 3" />
            <CircleWithFullLine upMark={grades[i]["fa4"]} downMark="100" label="FA 4" />
            <CircleWithFullLine upMark={grades[i]["sa2"]} downMark="100" isLarge label="SA 2"/>
            <Button variant="contained" disableElevation style={{ marginLeft: { xs: '0', sm: '40px' }, marginTop: { xs: '20px', sm: '0' }, backgroundColor: '#d9d9d9', color: 'black' }}>Final Grade B</Button>
          </Box>
        </Grid>
      );
    })}
  </Grid>
</Box>




     
       
      {/* below code is for capsule components */}
      <div>
        
      <br></br>
      <Capsulestyle date={date} score={grades[0]["fa1"]} assessment={assessment}></Capsulestyle>
      <Capsulestyle date={date} score={grades[0]["fa1"]} assessment={assessment}></Capsulestyle>
      <Capsulestyle date={date} score={grades[0]["fa1"]} assessment={assessment}></Capsulestyle>
      <Capsulestyle date={date} score={grades[0]["fa1"]} assessment={assessment}></Capsulestyle>
      <Capsulestyle date={date} score={grades[0]["fa1"]} assessment={assessment}></Capsulestyle>
      <Capsulestyle date={date} score={grades[0]["fa1"]} assessment={assessment}></Capsulestyle>
      </div>

      
      {/* the belw code is for 3 color components */}
      <div style={{ ...capsuleStyle, marginLeft: '40px' }}>
      <span style={dateStyle}> Test on <br></br>{date}</span>
      <span style={lineStyle}>Max Score Possible<br></br>{score}</span>
          <span style={verticalLineStyle}>
            <span style={assessmentStyle}>{assessment}</span>
          </span>
        </div>
        <div style={{ ...capsuleStyle, marginLeft: '40px', fontFamily: 'Roboto' }}>
          <div style={topSectionStyle} />
          <span style={dateStyle}> Test on <br></br>{date}</span>
          <span style={lineStyle}>Max Score Possible<br></br>{score}</span>
          <span style={verticalLineStyle}>
            <span style={assessmentStyle}>{assessment}</span>
          </span>
        </div>
        <div style={{ ...capsuleStyle, marginLeft: '40px', fontFamily: 'Roboto' }}>
          <div style={topSectionStyleforAbsent} />
          <span style={dateStyle}><strong style={{fontWeight: 'bold'}}>ABSENT</strong></span>
          <span style={lineStyle}>Max Score Possible<br></br>{score}</span>
          <span style={verticalLineStyle}>
            <span style={assessmentStyle}>{assessment}</span>
          </span>
        </div>
        {/* the below code is for different colour components */}
        <div>
      <br/>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <div style={{ ...capsuleStyle, marginLeft: '40px' }}>
          <span style={dateStyle}><strong style={{fontWeight: 'bold'}}>{stage}</strong></span>
          <span style={fulllineStyle}>Test on<br></br>{date}</span>
        </div>
        <div style={{ ...capsuleStyle, marginLeft: '40px' }}>
        <div style={bottomSectionStyle} />
        <span style={dateStyle}><strong style={{fontWeight: 'bold'}}>{stage}</strong></span>
          <span style={fulllineStyle}>Grades Due on<br></br>{date}</span>
        </div>
        <div style={{ ...capsuleStyle, marginLeft: '40px', fontFamily: 'Roboto' }}>
          <div style={ bottomSectionStyleforAbsent} />
          <span style={dateStyle}><strong style={{fontWeight: 'bold'}}>{stage}</strong></span>
          <span style={fulllineStyle}><strong style={{fontWeight: 'bold'}}>ABSENT!!!</strong></span>
        </div>
        <div style={{ ...capsuleStyle, marginLeft: '40px', fontFamily: 'Roboto' }}>
          <div style={ bottomSectionStyleforGrade} />
          <span style={dateStyle}><strong style={{fontWeight: 'bold'}}>{stage}</strong></span>
          <span style={fulllineStyle}><strong style={{fontWeight: 'bold'}}>Grades Pending!!</strong></span>
        </div>
      </div>
      
      
    </div>


        </div>
      
)

};
export default Grades;
