import {blue, pink, red, green, grey, yellow} from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const appTheme = createTheme({
    palette: {
        primary: blue,
        secondary: pink,
        success: green,
        error: red,
        info: yellow,
        warning: grey,
    },      
    MUIDataTableBodyCell: {
        styleOverrides: {
          root: {
            backgroundColor: "#FF0000"
          }
        }
      }
});