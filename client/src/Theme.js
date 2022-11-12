import { createTheme } from '@mui/material'

/* Border radius */
const borderRadius = {
    small: "10px",
    medium: "25px",
    large: "30px"
}

/* Buttons */
const button = {
    padding: "8px 24px",
    hoverColor: '#2d3436'
}

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
    },
    components: {
        MuiButton: {
            styleOverrides: {
                contained: {
                    borderRadius: borderRadius.medium,
                    padding: button.padding,
                    border: "none",
                    '&:hover': {
                        backgroundColor: button.hoverColor
                    }
                },
                outlined: {
                    borderRadius: borderRadius.medium,
                    padding: button.padding,
                    '&:hover': {
                        backgroundColor: button.hoverColor,
                        borderColor: button.hoverColor,
                        color: '#fff',
                    }
                }
            }
        }
    }
});