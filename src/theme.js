import { createTheme } from "@mui/material/styles";
const Colors = {
    yellow: "#FAE100",
    black: "#000000"
}

const theme= createTheme({
    palette: {
        primary:{
            main:Colors.yellow

        }, 
        black:{
            main: Colors.black
        } 
    }

})

export default theme;