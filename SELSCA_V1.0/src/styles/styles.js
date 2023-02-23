import { createTheme} from "@mui/material";

const MainTheme = createTheme({
    palette: {
        type: 'dark',
        primary: {
          main: '#6C00FF',
        },
        secondary: {
          main: '#2DCDDF',
        },
        background: {
          default: '#c4c4c4',
          paper: '#424242',
        },
        text: {
          primary: '#ffebee',
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
                        backgroundColor:'#7a3bd1',
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