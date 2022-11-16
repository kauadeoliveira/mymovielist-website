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
    SearchIconWrapper,
    SearchInput,
    SearchResults,
    SearchWrapper
} from "./style"
import { useDispatch, useSelector } from "react-redux";
import { searchValueSlice } from "../../../store/slices/searchValueSlice";


export default function SearchBar({ style, closeIcon }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { searchValue } = useSelector(store => store.searchValueSlice)
    const handleInputValue = (event) => {
        dispatch(searchValueSlice.actions.onChangeValue(event.target.value))
        console.log(searchValue)
    }
    return(
        <SearchWrapper style={style}>
            <MySearchBar bdColor={theme.palette.text.primary} >
                <SearchIconWrapper sx={{color: theme.palette.text.primary}}>
                    <SearchSharpIcon fontSize="small"/>
                </SearchIconWrapper>
                <SearchInput placeholder="Search" onChange={handleInputValue}/>
                <CloseIconWrapper closeIcon={closeIcon} onClick={closeIcon}>
                    <CloseSharpIcon fontSize="inherit"/>
                </CloseIconWrapper>
            </MySearchBar>
            <SearchResults>
            
            </SearchResults>
        </SearchWrapper>
    )
}