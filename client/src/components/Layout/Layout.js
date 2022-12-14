import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Menu from '../Menu/Menu'
import { Outlet } from 'react-router-dom'

const Layout = () => {

    const headerHeight = 100;
    const siderbarWidth = 120;

    return (
        <>
        <Box component="header">
            <Navbar height={headerHeight} sidebarWidth={siderbarWidth} />
        </Box>
        <Box component="nav">
            <Menu sidebarWidth={siderbarWidth} />
        </Box>
        <Box component="main" sx={{ mt: headerHeight+"px", ml: { xs: 0, sm: siderbarWidth+"px" } }}>
            <Outlet/>
        </Box>
        <Box component="footer">
            
        </Box>
        </>
    )
}

export default Layout