// Components
import { AppBar, Button, IconButton, Menu, MenuItem, Modal, Slide, Toolbar, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";

// Hooks
import { useState } from "react";

// Icons
import SearchIcon from '@mui/icons-material/Search';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// Styles
import { ModalContent, Search, SearchIconWrapper } from "./styles";


// Function Component
export default function NavBar() {
    const [anchorEl, setAnchorEl] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleClick = (event) => {
        const id = event.currentTarget.id
        switch(id){
            case "category-btn": 
                setAnchorEl(event.currentTarget)
                setOpenMenu(true)
                break;

            case "search-btn":
                setOpenModal(true)
                break;
            case "theme-btn":
                setDarkMode(!darkMode)
                break;
        }
    }

    const handleClose = () => {
        openMenu ? setOpenMenu(false) : setOpenModal(false)
    }

    return(
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="default">
                <Toolbar sx={{"justify-content": "space-between"}}>
                    <Typography>MyMovieList</Typography>
                    <Box>
                        <Button
                            id="category-btn"
                            onClick={handleClick}
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
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'category-btn',
                            }}
                        >
                            <MenuItem onClick={handleClose}>Category</MenuItem>
                            <MenuItem onClick={handleClose}>Category</MenuItem>
                            <MenuItem onClick={handleClose}>Category</MenuItem>
                        </Menu>
                        <Button>Bombando</Button>
                    </Box>
                    <Box>
                        <Tooltip title="Search Movie" arrow>
                            <IconButton id="search-btn" onClick={handleClick}>
                                <SearchIcon />
                            </IconButton>
                        </Tooltip>
                        <Modal
                            open={openModal}
                            onClose={handleClose}
                            aria-labelldby="modal-search"
                            aria-describedby="modal-search-description"
                        >
                            <Slide in={openModal} direction="left">
                                <ModalContent>
                                    <AppBar color="inherit">
                                        <Toolbar>
                                            <IconButton
                                                edge="start"
                                                onClick={handleClose}
                                            >
                                                <KeyboardBackspaceIcon />
                                            </IconButton>
                                            <Search>
                                                <SearchIconWrapper>
                                                    <SearchIcon />
                                                </SearchIconWrapper>
                                                <input type="search" />
                                            </Search>
                                        </Toolbar>
                                    </AppBar>
                                </ModalContent>
                            </Slide>
                        </Modal>
                        <Tooltip title="Change Theme" arrow>
                            <IconButton id="theme-btn" onClick={handleClick}>
                                {darkMode ? <LightModeIcon /> : <ModeNightIcon />}
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}