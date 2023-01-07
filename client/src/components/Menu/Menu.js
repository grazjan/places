import { Avatar, Drawer, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material'

import StarIcon from '@mui/icons-material/Star';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PushPinIcon from '@mui/icons-material/PushPin';
import InfoIcon from '@mui/icons-material/Info';
import AddBoxIcon from '@mui/icons-material/AddBox';
import styled from '@emotion/styled';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';
import Logo from '../../images/logo.png';
import { grey } from '@mui/material/colors';
import { Link } from 'react-router-dom';



const menuItems = [
    { label: "Discover", name: "discover", icon: <TravelExploreIcon color="primary" fontSize="large" />, onlyMobile: false, path: "/" },
    { label: "My Favorites", name: "my-favorites", icon: <StarIcon color="disabled" fontSize="large" />, onlyMobile: false, path: "/favorites"  },
    { label: '', name: 'avatar', icon: <Avatar alt="User avatar">G</Avatar>, onlyMobile: true, path: "/user"  },
    { label: "My own places", name: "own-places", icon: <PushPinIcon color="disabled" fontSize="large" />, onlyMobile: false, path: "/own-places"  },
    { label: "", name: "settings", icon: <SettingsOutlined color="disabled" fontSize="large" />, onlyMobile: true, path: "/settings"  },
    // { label: "About", name: "about", icon: <InfoIcon color="info" fontSize="large" /> },
    // { label: "Share your visited place", name: "share-visited", icon: <AddBoxIcon color="success" fontSize="large" /> }
]

/* styled */
const StyledMenu = styled(Drawer)((props) => (({theme}) => ({
    '& .MuiDrawer-paper': { 
        boxSizing: 'border-box', 
        width: props.sidebarWidth+"px",
        padding: `${theme.spacing(2)} 0px`
    },
    '& .MuiButtonBase-root': {
        display: 'block',
        textAlign: "center",
        padding: theme.spacing(2),
        '& > a': {
            textDecoration: 'none',
            color: theme.palette.text.primary,
            fontWeight: 500,
            lineHeight: 1.25,
        },
        '& .MuiListItemText-root': {
            margin: 0,
            '& .MuiTypography-root': {
                fontWeight: 'bold',
                lineHeight: 1.25,
            }
        }
    },
    [theme.breakpoints.down('sm')]: {
        '& .MuiDrawer-paper': { 
            top: 'auto',
            width: '100%',
            left: 0,
            right: 0,
            bottom: 0,
            height: 'auto',
            '& .MuiList-root': {
                display: 'flex',
                '& .MuiSvgIcon-root': {
                    fontSize: "2rem"
                },
                '& .MuiListItemText-root': {
                    display: 'none'
                }
            }
        },
    },
})))

const Menu = ({ sidebarWidth }) => {
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <StyledMenu
            container={container}
            variant="permanent"
            sidebarWidth={sidebarWidth}
            open={true}
            className="bottom-mobile"
            ModalProps={{
                keepMounted: true
            }}
        > 
      
            <Box sx={{ display: { xs: "none", sm: "block" }, mb: 2 }}  textAlign="center">
                <img src={Logo} width="64" height="64" alt="Places logo" />
            </Box>
            <List itemScope itemType="http://www.schema.org/SiteNavigationElement" disablePadding> 
                {menuItems.map(item=> (
                    <ListItem sx={{ display: { sm: item.onlyMobile ? 'none' : 'block' } }} key={item.name} role="menuitem" itemProp='name' disablePadding >
                        <ListItemButton>
                            <Link to={item.path}>
                                {item.icon}
                                <ListItemText primary={item.label} />
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
                </List>
        </StyledMenu>
    )
}

export default Menu