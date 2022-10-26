import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper, ToggleButton, ToggleButtonGroup, Toolbar } from "@mui/material";
import { Box } from "@mui/system";


import WhatshotIcon from '@mui/icons-material/Whatshot';
import HomeSharpIcon from '@mui/icons-material/HomeSharp';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FormatListBulletedSharpIcon from '@mui/icons-material/FormatListBulletedSharp';
import { useState } from "react";
import { ToggleThemes } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { themeSlice } from "../../../store/slices/themeSlice";


export default function NavBar({ open }) {
    const [theme, setTheme] = useState('light')
    const themeState = useSelector(store => store.theme)
    const dispatch = useDispatch()
    console.log(open)


    const handleTheme = (event, newValue) => {
        setTheme(newValue)
        dispatch(themeSlice.actions.changeTheme())
        
    }
    return(
        <Box component="nav" sx={{backgroundColor: 'black'}}>
            <Drawer 
                open={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <div>
                    <Toolbar>
                        <h1>MyMovieList</h1>
                    </Toolbar>
                    <ToggleThemes
                        value={theme}
                        exclusive
                        onChange={handleTheme}
                        size='small'
                        color="primary"
                    >
                        <ToggleButton value="light">
                            <LightModeIcon fontSize="small"/>
                            Light
                        </ToggleButton>
                        <ToggleButton value="dark">
                            <DarkModeIcon fontSize="small"/>
                            Dark
                        </ToggleButton>
                    </ToggleThemes>
                    <List>
                    <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <HomeSharpIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    Home
                                </ListItemText>
                            </ListItemButton>
                        </ListItem>
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