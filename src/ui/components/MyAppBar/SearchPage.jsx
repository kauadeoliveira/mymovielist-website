import { IconButton, useTheme } from "@mui/material";
import SearchBar from "../SearchBar";
import { SearchPageWrapper } from "./style";
import HighlightOffSharpIcon from '@mui/icons-material/HighlightOffSharp';
import { useDispatch, useSelector } from "react-redux";
import { searchBarSlice } from "../../../store/slices/searchBarSlice";

export default function SearchPage() {
    const { openSearchBar } = useSelector(store => store.searchBarSlice)
    const dispatch = useDispatch()
    const theme = useTheme()

    const handleCloseSearchBar = () => dispatch(searchBarSlice.actions.open())
    return(
        <SearchPageWrapper bgColor={theme.palette.background.paper}>
            <div className="close-searchpage">
                <IconButton onClick={handleCloseSearchBar}>
                    <HighlightOffSharpIcon />
                </IconButton>
            </div>
            <SearchBar style={{width: '50%', margin: '0 auto'}}/>
        </SearchPageWrapper>
    )
}