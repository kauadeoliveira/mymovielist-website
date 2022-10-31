// Material UI imports
import { 
    AppBar,
    Avatar,
    Box,
    IconButton,
    Link,
    Toolbar
} from "@mui/material";
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

// Redux and Store imports
import { 
    useDispatch,
    useSelector
} from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice";
import { themeSlice } from "../../../store/slices/themeSlice";

// My Components imports
import Search from "./Search";
import NavBar from "../NavBar";

// React Imports
import { useState } from "react";

// My Component Function
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