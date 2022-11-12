import React, { useState } from 'react'
import { AppBar, Avatar, Box, IconButton, Input, InputAdornment, Toolbar } from '@mui/material'
import styled from '@emotion/styled';
import Logo from '../../images/logo.png';
import { grey } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


/* styled */
const StyledAppbar = styled(AppBar)(({ theme }) => ({
    padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
    border: 'none',
    background: '#fff',
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(1),
    }
}));

const Search = styled(Input)(({ theme }) => ({
    width: "100%",
    background: grey[200],
    padding: `${theme.spacing(1)} ${theme.spacing(2)}`,
    borderRadius: theme.shape.borderRadius,
    '& .MuiSvgIcon': {
        marginRight: theme.spacing(1)
    }
}))

const Navbar = () => {

    const [search, setSearch] = useState('');

    return (
        <StyledAppbar
            component="div"
        >
            <Toolbar disableGutters>
                <Box sx={{ mr: { xs: 2, sm: 4 } }}>
                    <img src={Logo} width="56" height="56" alt="Places logo" />
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
                <Box ml={5} sx={{ display: { xs: 'none', sm: 'block' } }}>
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