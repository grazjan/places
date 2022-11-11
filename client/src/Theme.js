import { createTheme } from '@mui/material'

export const theme = createTheme({
    palette: {
        primary: {
            main: '#ff3838'
        },
        secondary: {
            main: '#ff9f1a'
        },
        text: {
            primary: '#2d3436',
            icon: '#2d3436'
        }
    },
    typography: {
        fontFamily: "'Source Sans Pro', 'Helvetica', 'Arial', sans-serif", 
        fontSize: 16
    }
});