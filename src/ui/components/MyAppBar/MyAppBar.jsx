import { AppBar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { MyButton, MyIconButton, MyLogo, MyToolbar } from "./styles";

import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import LiveTvSharpIcon from '@mui/icons-material/LiveTvSharp';
import { useState } from "react";
export default function MyAppBar() {
    const [categories, setCategories] = useState(null);
    const open = Boolean(categories)


    const handleOpenCategories = (event) => {
        setCategories(event.currentTarget)
    }

    const handleClose = () => {
        setCategories(null)
    }

    return(
        <AppBar position="sticky">
            <MyToolbar>
                <MyLogo href="/">
                    <LiveTvSharpIcon />
                </MyLogo>
                <div className="pages">
                    <MyButton href="#">Top rated</MyButton>
                    <MyButton href="#">Popular</MyButton>
                    <MyButton
                     id="categories-bttn"
                     aria-controls={open ? 'categories-menu' : undefined}
                     aria-haspopup="true"
                     aria-expanded={open ? "true" : undefined}
                     onClick={handleOpenCategories}
                    >
                        Categories
                    </MyButton>
                    <Menu
                     id="categories-menu"
                     anchorEl={categories}
                     open={open}
                     onClose={handleClose}
                     MenuListProps={{
                        'aria-labelledby': 'categories-bttn',
                     }}
                    >
                        <MenuItem>Comedy</MenuItem>
                        <MenuItem>Comedy</MenuItem>
                        <MenuItem>Comedy</MenuItem>
                        <MenuItem>Comedy</MenuItem>
                    </Menu>
                </div>
                <div className="settings">
                    <IconButton sx={{'fontSize': '1.2rem'}}>
                        <SearchSharpIcon fontSize="inherit"/>
                    </IconButton>
                    <IconButton sx={{'fontSize': '1.2rem'}}>
                        <LightModeIcon fontSize="inherit"/> 
                    </IconButton>
                </div>
            </MyToolbar>
        </AppBar>
    )
}