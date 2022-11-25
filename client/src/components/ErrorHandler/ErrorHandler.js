import { Box, Button } from '@mui/material'
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import styled from '@emotion/styled';

const StyledErrorHandler = styled(Box)(({ theme }) => ({
    '& .MuiSvgIcon-root': {
        fontSize: "4rem"
    }
}))

const ErrorHandler = ({ message, callback }) => {
  return (
    <StyledErrorHandler>
        <Box display="flex" flexDirection="column" alignItems="center" mb={3}>
            <ErrorOutlineIcon color="warning" />
            <strong>
                {message ? message : "An error has occurred. Please try again."}
            </strong>
        </Box>
        {callback && 
            <Button variant='contained' onClick={callback}>
                Try again
            </Button>
        }
    </StyledErrorHandler>
  )
}

export default ErrorHandler