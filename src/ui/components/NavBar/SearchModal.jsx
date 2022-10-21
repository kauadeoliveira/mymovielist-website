import { AppBar, IconButton, Modal, Slide, Toolbar } from "@mui/material";
import { ModalContent, Search, SearchIconWrapper } from "./styles";

// Icons
import SearchIcon from '@mui/icons-material/Search';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import LightModeIcon from '@mui/icons-material/LightMode';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

// Redux
import { useDispatch, useSelector } from "react-redux";
import { searchModalSlice } from "../../../store/slices/searchModalSlice";

// React Hooks
import { useEffect, useRef } from "react";

export default function SearchModal() {
    const openSearchModal = useSelector(state => state.searchModal.openModalSearch)
    const dispatch = useDispatch()
    const {open} = searchModalSlice.actions
    const inputRef = useRef(null)


    const handleCloseSearchBtn = () => dispatch(open());

 return (
    <Modal
    open={openSearchModal}
    onClose={handleCloseSearchBtn}
    aria-labelldby="modal-search"
    aria-describedby="modal-search-description"
>
    <Slide in={openSearchModal} direction="left">
        <ModalContent>
            <AppBar>
                <Toolbar>
                    <IconButton
                        edge="start"
                        onClick={handleCloseSearchBtn}
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
 )
}