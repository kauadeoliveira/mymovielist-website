import { Backdrop, Box, Collapse, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Toolbar, useTheme } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice"
import { store } from "../../../store/store"
import Search from "./Search";

import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';


export default function NavBar() {
    const openNav = useSelector(store => store.navBar.openNavBar)
    const [openCategories, setOpenCategories] = useState(false)
    const theme = useTheme()

    const handleClick = () => setOpenCategories(!openCategories)

    const handleClose = () => setAnchorEl(null)
    return(
        <Backdrop open={openNav} sx={{top: '56px', zIndex: theme.zIndex.drawer, height: '100%'}}>
            <Box sx={{width: '100vw', height: '100vh', backgroundColor: theme.palette.background.paper}}>
                <List
                 sx={{color: theme.palette.text.primary}}
                 component="nav"
                 subheader={
                    <Search />
                 }
                >
                    <ListItemButton divider href="/top-rated">
                        Top Rated
                    </ListItemButton>
                    <ListItemButton divider href="/popular">
                        Popular
                    </ListItemButton>
                    <ListItemButton divider href="/now-playing">
                        Now Playing
                    </ListItemButton>
                    <ListItemButton onClick={handleClick}>
                        Categories
                        <ExpandMoreSharpIcon />
                    </ListItemButton>
                    <Collapse
                     in={openCategories}
                     timeout="auto"
                     unmountOnExit
                    >
                        <List component="div">
                            <ListItem>
                                <ListItemButton>Comedy</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>Action</ListItemButton>
                            </ListItem>
                            <ListItem>
                                <ListItemButton>Horror</ListItemButton>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </Backdrop>
    )
}