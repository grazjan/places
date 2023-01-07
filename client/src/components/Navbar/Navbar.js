import React, { useState } from 'react'
import { AppBar, Avatar, Box, Button, IconButton, Input, InputAdornment, Toolbar } from '@mui/material'
import styled from '@emotion/styled';
import { grey } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Logo from '../../images/logo.png';
import { Link } from 'react-router-dom';


/* styled */
const StyledAppbar = styled(AppBar)(({ theme }) => (props) => ({
    padding: `${theme.spacing(2)} ${theme.spacing(2)}`,
    border: 'none',
    background: '#fff',
    left: props.sidebarWidth+"px",
    width: `calc(100% - ${props.sidebarWidth}px)`,
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
        width: "100%",
        left: 0
    }
}));

const Search = styled(Input)(({ theme }) => ({
    width: "100%",
    background: grey[200],
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    borderRadius: theme.shape.borderRadiusMedium,
    '& .MuiSvgIcon': {
        marginRight: theme.spacing(1)
    }
}))

const Navbar = ({ headerHeight, sidebarWidth }) => {

    const [search, setSearch] = useState('');

    return (
        <StyledAppbar
            component="div"
            sidebarWidth={sidebarWidth}
            headerHeight={headerHeight}
        >
            <Toolbar disableGutters>
                <Box sx={{ display: { xs: "block", sm: "none" }, mr: 2 }} textAlign="center">
                    <img src={Logo} width="64" height="64" alt="Places logo" />
                </Box>
                <Box flexGrow={1}>
                    <Search 
                        disableUnderline
                        placeholder='Search new places...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        startAdornment={
                            <InputAdornment>
                                <SearchIcon />
                            </InputAdornment>
                        }
                    />
                </Box>
                <Button sx={{ ml: 2 }} to="/create" as={Link} variant="contained">
                    Add place
                </Button>
                <Box ml={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
                    <IconButton>
                        <SettingsOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <Avatar alt="User Avatar">
                            G
                        </Avatar>
                    </IconButton>
                </Box>
            </Toolbar>
        </StyledAppbar>
    )
}

export default Navbar