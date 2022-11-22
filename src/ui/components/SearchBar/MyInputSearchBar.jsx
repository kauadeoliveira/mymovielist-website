// Icons
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { MyInputWrapper } from './style';
import { useTheme } from '@emotion/react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchValueSlice } from '../../../store/slices/searchValueSlice';
import { searchBarSlice } from '../../../store/slices/searchBarSlice';


export default function MyInputSearchBar({ style }) {
    const theme = useTheme()
    const inputRef = useRef(null)
    const dispatch = useDispatch();

    
    const { searchValue } = useSelector(store => store.searchValueSlice)


    
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
        <MyInputWrapper
         textPrimaryColor={theme.palette.text.primary}
         style={style} 
        >
            
            <div className="search-icon">
                <SearchSharpIcon fontSize="inherit"/>
            </div>
            <input
            type="text" 
            onFocus={handleOpenResults}
            onChange={handleInputValue}
            placeholder="Search"
            ref={inputRef}
            />
            <div className="close-icon" onClick={handleCloseResults}>
                <CloseSharpIcon fontSize="inherit"/>
            </div>
        </MyInputWrapper>
    )
}