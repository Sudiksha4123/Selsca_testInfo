import React from 'react';
import {
AppBar,
IconButton,
Toolbar,
List,
Drawer,
ListItem,
ListItemText,
Container,
Button,
Typography,
Grid,
Box,
styled,
} from '@mui/material';

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
const capsuleStyle = {
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
  backgroundColor: '#000'
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
  textAlign: 'left',
  paddingLeft: '10px',
  whiteSpace: 'nowrap'
};

const dateStyle = {
  position: 'absolute',
  top: '22%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  fontSize: '14px',
};

const date = "2023-02-27";
const score = "max score 25";
const assessment = "FA-1";
const stage = 'Finals';





const App = () => {
return (
<div>
{/* <Grid container>
<Grid item xs={12} display="flex" alignItems="center" justifyContent="center">
<Typography variant="overline" sx={{ fontSize: 40 }}>
{' '}
Grades dashboard{' '}
</Typography>
</Grid>
</Grid> */}
  <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '50px 0' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
      <Typography variant="h4" component="h1" color="black">
        Subject 1     </Typography>
      <CircleWithFullLine upMark="90" downMark="100" label="FA 1" marginleft='40px' />
      <CircleWithFullLine upMark="80" downMark="100" label="FA 2" />
      <CircleWithFullLine upMark="70" downMark="100" isLarge label="SA 1"/>
      <CircleWithFullLine upMark="92" downMark="100" label="FA 3" />
      <CircleWithFullLine upMark="57" downMark="100" label="FA 4" />
      <CircleWithFullLine upMark="74" downMark="100" isLarge label="SA 2"/>
      <Button variant="contained" disableElevation style={{ marginLeft: '40px', backgroundColor: '#d9d9d9', color: 'black' }}>Final Grade B</Button>


      </Box>
      </Box>
      {/* subject 2 code is from here */}
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '50px 0' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
      <Typography variant="h4" component="h1" color="black">
        Subject 2
      </Typography>
      <CircleWithFullLine upMark="96" downMark="100" label="FA 1" />
      <CircleWithFullLine upMark="82" downMark="100" label="FA 2" />
      <CircleWithFullLine upMark="50" downMark="100" isLarge label="SA 1"/>
      <CircleWithFullLine upMark="80" downMark="100" label="FA 3" />
      <CircleWithFullLine upMark="65.5" downMark="100" label="FA 4" />
      <CircleWithFullLine upMark="79" downMark="100" isLarge label="SA 2"/>
      <Button variant="contained" disableElevation style={{ marginLeft: '40px', backgroundColor: '#d9d9d9', color: 'black' }}>Final Grade B</Button>


      </Box>
      </Box>
      {/* subject 3 code is from is here  */}
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', margin: '50px 0' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', margin: '10px' }}>
      <Typography variant="h4" component="h1" color="black">
        Subject 3
      </Typography>
      <CircleWithFullLine upMark="98" downMark="100" label="FA 1" />
      <CircleWithFullLine upMark="43" downMark="100" label="FA 2" />
      <CircleWithFullLine upMark="35" downMark="100" isLarge label="SA 1"/>
      <CircleWithFullLine upMark="60" downMark="100" label="FA 3" />
      <CircleWithFullLine upMark="30" downMark="100" label="FA 4" />
      <CircleWithFullLine upMark="65" downMark="100" isLarge label="SA 4"/>
      <Button variant="contained" disableElevation style={{ marginLeft: '40px', backgroundColor: '#d9d9d9', color: 'black' }}>Final Grade B</Button>


      </Box>
      </Box>
      {/* below code is for capsule components */}
      <div>
      <br></br>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" component="h1" color="black">
          Subject 1
        </Typography>
        <div style={{ ...capsuleStyle, marginLeft: '40px' }}>
          <span style={dateStyle}> Test on <br></br>{date}</span>
          <span style={lineStyle}>{score}</span>
          <span style={verticalLineStyle}>
            <span style={assessmentStyle}>{assessment}</span>
          </span>
        </div>
        <Button variant="contained" disableElevation style={{ marginLeft: '40px', backgroundColor: '#d9d9d9', color: 'black' }}>Final Grade B</Button>


      </div>
      
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" component="h1" color="black">
          Subject 1
        </Typography>
        <div style={{ ...capsuleStyle, marginLeft: '40px' }}>
        <span style={dateStyle}> Test on <br></br>{date}</span>
          <span style={lineStyle}>{score}</span>
          <span style={verticalLineStyle}>
            <span style={assessmentStyle}>FA 2</span>
          </span>
        </div>
        <Button variant="contained" disableElevation style={{ marginLeft: '40px', backgroundColor: '#d9d9d9', color: 'black' }}>Final Grade B</Button>



      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" component="h1" color="black">
          Subject 1
        </Typography>
        <div style={{ ...capsuleStyle, marginLeft: '40px' }}>
        <span style={dateStyle}> Test on <br></br>{date}</span>
          <span style={lineStyle}>{score}</span>
          <span style={verticalLineStyle}>
            <span style={assessmentStyle}>SA 1</span>
          </span>
        </div>
        <Button variant="contained" disableElevation style={{ marginLeft: '40px', backgroundColor: '#d9d9d9', color: 'black' }}>Final Grade B</Button>


      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" component="h1" color="black">
          Subject 1
        </Typography>
        <div style={{ ...capsuleStyle, marginLeft: '40px' }}>
        <span style={dateStyle}> Test on <br></br>{date}</span>
          <span style={lineStyle}>{score}</span>
          <span style={verticalLineStyle}>
            <span style={assessmentStyle}>FA 3</span>
          </span>
        </div>
        <Button variant="contained" disableElevation style={{ marginLeft: '40px', backgroundColor: '#d9d9d9', color: 'black' }}>Final Grade B</Button>


      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" component="h1" color="black">
          Subject 1
        </Typography>
        <div style={{ ...capsuleStyle, marginLeft: '40px' }}>
        <span style={dateStyle}> Test on <br></br>{date}</span>
          <span style={lineStyle}>{score}</span>
          <span style={verticalLineStyle}>
            <span style={assessmentStyle}>FA 4</span>
          </span>
        </div>
        <Button variant="contained" disableElevation style={{ marginLeft: '40px', backgroundColor: '#d9d9d9', color: 'black' }}>Final Grade B</Button>


      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <Typography variant="h4" component="h1" color="black">
          Subject 1
        </Typography>
        <div style={{ ...capsuleStyle, marginLeft: '40px' }}>
        <span style={dateStyle}> Test on <br></br>{date}</span>
          <span style={lineStyle}>{score}</span>
          <span style={verticalLineStyle}> 
            <span style={assessmentStyle}>SA 2</span>
          </span>
        </div>
        <Button variant="contained" disableElevation style={{ marginLeft: '40px', backgroundColor: '#d9d9d9', color: 'black' }}>Final Grade B</Button>
        </div>
      </div>
      {/* the belw code is for 3 color components */}
      <div style={{ ...capsuleStyle, marginLeft: '40px' }}>
      <span style={dateStyle}> Test on <br></br>{date}</span>
          <span style={lineStyle}>{score}</span>
          <span style={verticalLineStyle}>
            <span style={assessmentStyle}>{assessment}</span>
          </span>
        </div>
        <div style={{ ...capsuleStyle, marginLeft: '40px', fontFamily: 'Roboto' }}>
          <div style={topSectionStyle} />
          <span style={dateStyle}> Test on <br></br>{date}</span>
          <span style={lineStyle}>{score}</span>
          <span style={verticalLineStyle}>
            <span style={assessmentStyle}>{assessment}</span>
          </span>
        </div>
        <div style={{ ...capsuleStyle, marginLeft: '40px', fontFamily: 'Roboto' }}>
          <div style={topSectionStyleforAbsent} />
          <span style={dateStyle}><strong style={{fontWeight: 'bold'}}>ABSENT</strong></span>
          <span style={lineStyle}>{score}</span>
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
          <span style={fulllineStyle}><strong style={{fontWeight: 'bold'}}>Grades Pending!</strong></span>
        </div>
      </div>
      
      
    </div>


        </div>
      
)
};
export default App;
