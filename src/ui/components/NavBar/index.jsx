import { Backdrop, Box, Collapse, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Slide, Toolbar, useTheme } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice"
import { store } from "../../../store/store"
import Search from "./Search";
import StarsSharpIcon from '@mui/icons-material/StarsSharp';
import OndemandVideoSharpIcon from '@mui/icons-material/OndemandVideoSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import { MyBackdrop, MyListItemButton } from "./styles";


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
                        <MyListItemButton href="/top-rated">
                            <span><OndemandVideoSharpIcon fontSize="inherit" color="primary"/></span>
                            <span>Top Rated</span>
                        </MyListItemButton>
                        <MyListItemButton href="/popular">
                            <span><WhatshotSharpIcon fontSize="inherit" color="primary"/></span>
                            <span>Popular</span>
                        </MyListItemButton>
                        <MyListItemButton href="/now-playing">
                            <span><StarsSharpIcon fontSize="inherit" color="primary"/></span>
                            <span>Now Playing</span>
                        </MyListItemButton>
                        <MyListItemButton onClick={handleClick}>
                            <span><ListSharpIcon fontSize="inherit" color="primary"/></span>
                            <span>Categories</span>
                            <span><ExpandMoreSharpIcon fontSize="inherit"/></span>
                        </MyListItemButton>
                        <Collapse in={openCategories}>
                            <List>
                                {genres.map(genre => {
                                    return(
                                        <ListItem key={genre} sx={{fontSize: '.8rem'}}>
                                            <ListItemButton href={`/category/${genre}`}>
                                                {genre}
                                            </ListItemButton>
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