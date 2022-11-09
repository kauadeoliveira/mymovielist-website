import { Backdrop, Box, Collapse, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Slide, Toolbar, useTheme } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice"
import { store } from "../../../store/store"
import Search from "./Search";

import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { MyBackdrop } from "./styles";


export default function NavBar() {
    const openNav = useSelector(store => store.navBar.openNavBar)
    const [openCategories, setOpenCategories] = useState(false)
    const theme = useTheme()

    const genres = [
        'Action',
        'Adventure',
        'Animation',
        'Comedy',
        'Crime',
        'Documentary',
        'Drama',
        'Family',
        'Fantasy',
        'History',
        'Horror',
        'Music',
        'Romance',
        'Science Fiction',
        'Thriller',
        'War'
    ]


    const handleClick = () => setOpenCategories(!openCategories)

    const handleClose = () => setAnchorEl(null)
    return(
        <Collapse in={openNav}>
                <Box sx={{backgroundColor: theme.palette.background.default, height: '100vh', padding: '10px 0'}}>
                    <Search />
                    <List>
                        <ListItemButton href="/top-rated">Top Rated</ListItemButton>
                        <ListItemButton href="/popular">Popular</ListItemButton>
                        <ListItemButton href="/now-playing">Now Playing</ListItemButton>
                        <ListItemButton onClick={handleClick}>
                            Categories <ExpandMoreSharpIcon />
                        </ListItemButton>
                        <Collapse in={openCategories}>
                            <List>
                                {genres.map(genre => {
                                    return(
                                        <ListItem key={genre}>
                                            <ListItemButton href={`/category/${genre}`}>{genre}</ListItemButton>
                                        </ListItem>
                                    )
                                })}
                            </List>
                        </Collapse>
                    </List>
                </Box>
        </Collapse>
    )
}