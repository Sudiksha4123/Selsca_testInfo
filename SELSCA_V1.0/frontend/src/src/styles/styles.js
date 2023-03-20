import { createTheme} from "@mui/material";

const MainTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#1b0169',
        },
        secondary: {
          main: '#2DCDDF',
        },
        background: {
          default: '#F5F5F5;',
          paper: '#424242',
        },
        text: {
          primary: '#242424',
          
        },
      },
      components : {
        MuiPaper: {
            variants : [
                {
                    props : {
                        variant : "login1"
                    },
                    style: {
                        backgroundColor:'DDDDDD',
                        elevation: 10,
                        padding: 20,
                        height: "50vh",
                        width: 400,
                        margin: "20px auto"
                    }
                }
            ]
        },
        MuiSelect: {
          variants: [
            {
              props : {
                variant : "register1"
              },
              style : {
                fontSize : 30
              }
            }
          ]
        },
        MuiTypography : {
          variants : [
            {
              props : {
                variant : "register1"
              },
              style : {
                fontSize : 25,
                fontFamily: "Roboto"
              }
            },
          
          ]
        },
      }
})

export default MainTheme;