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

import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import LocalFireDepartmentSharpIcon from '@mui/icons-material/LocalFireDepartmentSharp';
import LiveTvSharpIcon from '@mui/icons-material/LiveTvSharp';
import StarsSharpIcon from '@mui/icons-material/StarsSharp';

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

    // const [pathname, setPathname] = useState('')
    // useEffect(() => {
    //     setPathname(window.location.pathname)
    // }, [])
    
    // const {pathname} = globalThis.window.location
    const pathname = '/'
    console.log(pathname)

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

                        <ListItem disablePadding>
                            <MyLink
                            href="/now-playing"
                            className={pathname === '/now-playing' ? 'active' : undefined}
                            > 
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LiveTvSharpIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Now Playing
                                    </ListItemText>
                                </ListItemButton>
                            </MyLink>
                        </ListItem>

                        <ListItem disablePadding>
                            <MyLink
                            href="/popular"
                            className={pathname === '/popular' ? 'active' : undefined}
                            > 
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LocalFireDepartmentSharpIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Popular
                                    </ListItemText>
                                </ListItemButton>
                            </MyLink>
                        </ListItem>

                        <ListItem disablePadding>
                            <MyLink
                            href="/top-rated"
                            className={pathname === '/top-rated' ? 'active' : undefined}
                            > 
                                <ListItemButton>
                                    <ListItemIcon>
                                        <StarsSharpIcon />
                                    </ListItemIcon>
                                    <ListItemText>
                                        Top Rated
                                    </ListItemText>
                                </ListItemButton>
                            </MyLink>
                        </ListItem>

                    </List>
                </div>
            </Drawer>
        </Box>
    )
}