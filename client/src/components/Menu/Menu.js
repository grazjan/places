import { Avatar, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material'

import StarIcon from '@mui/icons-material/Star';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PushPinIcon from '@mui/icons-material/PushPin';
import InfoIcon from '@mui/icons-material/Info';
import AddBoxIcon from '@mui/icons-material/AddBox';
import styled from '@emotion/styled';
import SettingsOutlined from '@mui/icons-material/SettingsOutlined';


const menuItems = [
    { label: "Discover", name: "discover", icon: <TravelExploreIcon fontSize="large" />, onlyMobile: false },
    { label: "My Favorites", name: "my-favorites", icon: <StarIcon fontSize="large" />, onlyMobile: false },
    { label: '', name: 'avatar', icon: <Avatar alt="User avatar">G</Avatar>, onlyMobile: true },
    { label: "My own places", name: "own-places", icon: <PushPinIcon fontSize="large" />, onlyMobile: false },
    { label: "", name: "settings", icon: <SettingsOutlined fontSize="large" />, onlyMobile: true },
    // { label: "About", name: "about", icon: <InfoIcon color="info" fontSize="large" /> },
    // { label: "Share your visited place", name: "share-visited", icon: <AddBoxIcon color="success" fontSize="large" /> }
]

/* styled */
const StyledMenu = styled(Drawer)((props) => (({theme}) => ({
    '& .MuiDrawer-paper': { 
        boxSizing: 'border-box', 
        width: props.sidebarWidth+"px",
        top: props.headerHeight
    },
    '& .MuiButtonBase-root': {
        display: 'block',
        textAlign: "center",
        padding: theme.spacing(2),
        '& .MuiListItemText-root': {
            margin: 0,
            '& .MuiTypography-root': {
                fontWeight: 600,
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

const Menu = ({ sidebarWidth, headerHeight }) => {
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <StyledMenu
            container={container}
            variant="permanent"
            sidebarWidth={sidebarWidth}
            headerHeight={headerHeight}
            open={true}
            className="bottom-mobile"
            ModalProps={{
                keepMounted: true
            }}
        > 
            <List itemScope itemType="http://www.schema.org/SiteNavigationElement" disablePadding> 
                {menuItems.map(item=> (
                    <ListItem sx={{ display: { sm: item.onlyMobile ? 'none' : 'block' } }} key={item.name} role="menuitem" itemProp='name' disablePadding >
                        <ListItemButton>
                            {item.icon}
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
                </List>
        </StyledMenu>
    )
}

export default Menu