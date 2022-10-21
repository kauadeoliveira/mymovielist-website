// MUI
import { AppBar, Button, IconButton, Menu, MenuItem, Modal, Slide, Toolbar, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useTheme } from "@mui/material/styles";

// Hooks React
import { useRef, useState } from "react";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { searchModalSlice } from "../../../store/slices/searchModalSlice";
import { themeSlice } from "../../../store/slices/themeSlice";

// Icons
import SearchIcon from '@mui/icons-material/Search';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// Styles
import { ModalContent, Search, SearchIconWrapper } from "./styles";
import SearchModal from "./SearchModal";


// Function Component
export default function NavBar() {
    const myDarkTheme = useTheme()

    const {open} = searchModalSlice.actions;
    const {changeTheme} = themeSlice.actions
    const {theme} = useSelector(state => state)
    const dispatch = useDispatch()


    const [anchorEl, setAnchorEl] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenCategoriesBtn = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenMenu(true);
    }

    const handleCloseCategories = () => {
        openMenu ? setOpenMenu(false) : setOpenModal(false);
    }

    const handleThemeBtn = () => dispatch(changeTheme())

    const handleOpenSearchBtn = () => {
        dispatch(open())
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent">
                <Toolbar sx={{"justify-content": "space-between"}}>
                    <Typography>MyMovieList</Typography>
                    <Box>
                        <Button
                            id="category-btn"
                            onClick={handleOpenCategoriesBtn}
                            aria-controls={openMenu ? 'category-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={openMenu ? 'true' : undefined}
                        >
                            Category
                        </Button>
                        <Menu
                            id="category-menu"
                            anchorEl={anchorEl}
                            open={openMenu}
                            onClose={handleCloseCategories}
                            MenuListProps={{
                                'aria-labelledby': 'category-btn',
                            }}
                        >
                            <MenuItem onClick={handleCloseCategories}>Category</MenuItem>
                            <MenuItem onClick={handleCloseCategories}>Category</MenuItem>
                            <MenuItem onClick={handleCloseCategories}>Category</MenuItem>
                        </Menu>
                        <Button>Bombando</Button>
                    </Box>
                    <Box>
                        <Tooltip title="Search Movie" arrow>
                            <IconButton id="search-btn" onClick={handleOpenSearchBtn}>
                                <SearchIcon />
                            </IconButton>
                        </Tooltip>
                        <SearchModal />

                        <Tooltip title="Change Theme" arrow>
                            <IconButton id="theme-btn" onClick={handleThemeBtn}>
                                {theme.darkTheme? <LightModeIcon /> : <ModeNightIcon />}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}