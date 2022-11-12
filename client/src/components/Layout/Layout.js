import { Box } from '@mui/material'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
    <Box component="header">

    </Box>
    <Box component="main">
        {children}
    </Box>
    <Box component="footer">
        
    </Box>
    </>
  )
}

export default Layout