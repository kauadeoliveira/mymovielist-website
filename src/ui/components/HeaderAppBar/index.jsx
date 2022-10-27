import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";


import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import Search from "./Search";
import NavBar from "../NavBar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice";
import { themeSlice } from "../../../store/slices/themeSlice";


import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';



export default function HeaderAppBar() {
    const dispatch = useDispatch();
    const themeState = useSelector(store => store.theme.darkTheme)

    const handleOpenNavBar = () => {
        dispatch(navBarSlice.actions.open())
    }

    const handleToggleTheme = () => {
        dispatch(themeSlice.actions.changeTheme())
    }
    return(
        <Box>
            <AppBar position="static" color="transparent">
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        onClick={handleOpenNavBar}
                    >
                        <MenuSharpIcon />
                    </IconButton>
                    <NavBar />
                    <Search />
                    <IconButton onClick={handleToggleTheme}>
                        {themeState ? <DarkModeIcon /> : <LightModeIcon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}