import { AppBar, Avatar, Box, IconButton, Toolbar } from "@mui/material";


import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import Search from "./Search";
import NavBar from "../NavBar";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice";

export default function HeaderAppBar() {
    const dispatch = useDispatch();
    const navBar = useSelector(store => store.navBar.openNavBar)
    
    const handleClick = () => {
        dispatch(navBarSlice.actions.open())
        console.log(navBar)
    }


    return(
        <Box>
            <AppBar position="static" color="transparent">
                <Toolbar sx={{justifyContent: 'space-between'}}>
                    <IconButton
                        size="large"
                        edge="start"
                        aria-label="menu"
                        onClick={handleClick}
                    >
                        <MenuSharpIcon />
                    </IconButton>

                    <NavBar />

                    <Search />

                    <Avatar sx={{width: '32px', height: '32px'}}/>
                </Toolbar>
            </AppBar>
        </Box>
    )
}