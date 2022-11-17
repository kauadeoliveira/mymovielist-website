// Material UI imports
import { 
    IconButton, 
    InputBase, 
    List, 
    ListItemButton, 
    useTheme
} from "@mui/material";

// Icons
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

// Components styled imports
import { 
    CloseIconWrapper,
    MySearchBar,
    SearchBarWrapper,
    SearchIconWrapper,
    SearchInput,
    SearchResults,
    SearchWrapper
} from "./style"
import { useDispatch, useSelector } from "react-redux";
import { searchValueSlice } from "../../../store/slices/searchValueSlice";
import { useEffect, useRef, useState } from "react";
import { searchBarSlice } from "../../../store/slices/searchBarSlice";


export default function SearchBar({ results }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const inputRef = useRef(null)


    const { searchValue } = useSelector(store => store.searchValueSlice)
    const { openSearchBar } = useSelector(store => store.searchBarSlice)

    const [showResults, setShowResults] = useState(false);
    

    const handleInputValue = (event) => {
        dispatch(searchValueSlice.actions.onChangeValue(event.target.value))
        console.log(searchValue)
    }

        const handleOpenResults = () => dispatch(searchBarSlice.actions.open(true))
        const handleCloseResults = () => {
            dispatch(searchBarSlice.actions.open(false))
            inputRef.current.value = ''

        dispatch(searchValueSlice.actions.onChangeValue(null))

        }

    return(
        <SearchBarWrapper>
            <MySearchBar textPrimaryColor={theme.palette.text.primary}>
                <div className="search-icon">
                    <SearchSharpIcon fontSize="inherit"/>
                </div>
                <input
                 type="text" 
                 onFocus={handleOpenResults}
                 onChange={handleInputValue}
                 ref={inputRef}
                />
                <div className="close-icon" onClick={handleCloseResults}>
                    <CloseSharpIcon fontSize="inherit"/>
                </div>
            </MySearchBar>
            <SearchResults showResults={openSearchBar} >
                <List>
                    {results ? (
                        results.map(movie => {
                            return(
                                <ListItemButton key={movie.id}>{movie.title}</ListItemButton>
                            )
                        })
                    ):(
                        <>Nenhum Resultado...</>
                    )}
                </List>
            </SearchResults>
        </SearchBarWrapper>
    )
}