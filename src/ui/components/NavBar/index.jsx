// Material UI Imports
import { 
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
    useTheme
} from "@mui/material";

import WhatshotIcon from '@mui/icons-material/Whatshot';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';

// React Imports
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

// Redux and Store Imports
import { useDispatch, useSelector } from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice";
import { store } from "../../../store/store";
import { Logo, MyLink } from "./styles";
import Link from "next/link";



// My Component Function
export default function NavBar() {
    const theme = useTheme()

// Handle open and close Navbar
    const navBarState = useSelector(store => store.navBar.openNavBar)
    const dispatch = useDispatch()
    const handleOnClose = () => dispatch(navBarSlice.actions.open())


// Handle active page

    const [pathname, setPathname] = useState('')
    useEffect(() => setPathname(window.location.pathname), [])

    return(
        <Box component="nav" sx={{backgroundColor: 'black'}}>
            <Drawer 
                open={navBarState}
                onClose={handleOnClose}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <div>
                    <Toolbar>
                        <Logo color={theme.palette.text.disabled}>MyMovieList</Logo>
                    </Toolbar>
                    <List>
                    <ListItem disablePadding>
                        <MyLink
                         href="/"
                         className={pathname === '/' ? 'active' : undefined}
                         > 
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeSharpIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Home
                                </ListItemText>
                            </ListItemButton>
                        </MyLink>
                    </ListItem>
                        <MyLink 
                         href="/trending"
                         className={pathname === "/trending" ? 'active' : undefined}>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <WhatshotIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Trending
                                    </ListItemText>
                                </ListItemButton>
                            </ListItem>
                        </MyLink>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <FormatListBulletedSharpIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Categories
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </Box>
    )
}