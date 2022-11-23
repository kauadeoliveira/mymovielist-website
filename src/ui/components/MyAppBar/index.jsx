import { AppBarWrapper, Logo, MenuCategoriesContent, MyBackdrop, MyCollapse} from "./style";

import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { Accordion, AccordionDetails, AccordionSummary, Box, Collapse, IconButton, List, ListItemButton, Menu, MenuItem, Skeleton, Slide, useTheme } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice"
import { themeSlice } from "../../../store/slices/themeSlice"
import NavBar from "../NavBar";
import Image from "next/image";
import MyLogo from "./MyLogo";
import { useEffect } from "react";
import { useState } from "react";
import { allCategories } from "../../../utils/functions/allCategories";
import { apiKey } from "../../../utils/apiKey";
import { toCapitalize } from "../../../utils/functions/toCapitalize";
import { searchBarSlice } from "../../../store/slices/searchBarSlice";
import SearchBar from "../SearchBar";
import { useWindowSize } from "../../../utils/hooks/useWindowSize";

export default function MyAppBar() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [height, width] = useWindowSize();


    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [movieIds, setMovieIds] = useState([])
    const [allMovies, setAllMovies] = useState([])

    const [resultsMovies, setResultsMovies] = useState([])

    const { openSearchBar } = useSelector(store => store.searchBarSlice)
    
    const { openNavBar } = useSelector(store => store.navBar);
    const { darkTheme } = useSelector(store => store.theme);

    const { searchValue } = useSelector(store => store.searchValueSlice);


    const handleOpenMenuSm = () => dispatch(navBarSlice.actions.open())
    const handleChangeTheme = () => dispatch(themeSlice.actions.changeTheme())    

    const handleOpenSearch = () => {
        dispatch(searchBarSlice.actions.open(true))
    }
    const handleCloseSearch = () => dispatch(searchBarSlice.actions.open(false))




    // Menu
    const [categoryAnchorEl, setCategoryAnchorEl] = useState(null);
    const openCategory = Boolean(categoryAnchorEl);

    const handleClickCategoryMenu = (event) => setCategoryAnchorEl(event.currentTarget);
    const handleCloseCategoryMenu = () => setCategoryAnchorEl(null);


 
    // useEffect(() => {
    //     async function getData(){
    //         const responseAllMovies = await Promise.all([
    //             fetch(
    //               `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
    //             ).then(response => response.json()),
    //             fetch(
    //               `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    //             ).then(response => response.json()),
    //         ]).then(response => {
    //             setAllMovies(response[0].results.concat(response[1].results));
    //             setMovieIds(allMovies.map(movie => movie.id))
    //         });

    //         setLoading(false)
    //     }
    //     getData()
    // }, [])

    // useEffect(() => {
    //     async function getCategories() {
    //         const urlAllMovies = movieIds.map(id => {
    //             return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
    //         })
    
    //         const responseDetails = await Promise.all(urlAllMovies.map(async url => {
    //             const response = await fetch(url);
    //             return await response.json();
    //         })).then(response => {
    //             setCategories(allCategories(response))
    //         })
    //     }
    //     if(movieIds){
    //         getCategories()
    //     }
    // }, [])

    
    useEffect(() => {
        async function getData(){
            const responseAllMovies = await Promise.all([
                fetch(
                  `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
                ).then(response => response.json()),
                fetch(
                  `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
                ).then(response => response.json()),
            ]).then(response => {
                setAllMovies(response[0].results.concat(response[1].results))
                setMovieIds(allMovies.map(movie => movie.id))
            });
    
            const urlAllMovies = movieIds.map(id => {
                return `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
            })
    
            const responseDetails = await Promise.all(urlAllMovies.map(async url => {
                const response = await fetch(url);
                return await response.json();
            })).then(response => {
    
                setCategories(allCategories(response))
            })
        
            setLoading(false)
        }
        getData()
    })

    useEffect(() => {
        if(typeof searchValue === "string"){
            const results = allMovies.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()));
            if(results.length > 10){
                setResultsMovies(results.slice(0, 10))
            }else{
                setResultsMovies(results)
            }
        }
    }, [searchValue])

    useEffect(() => {
        if(width < 850 && !openNavBar){
            dispatch(searchBarSlice.actions.open(false))
        }
    }, [width])

    
    return(
        <div>
            <AppBarWrapper
             style={{
                backgroundColor: theme.palette.mode === 'dark' ? 'rgba(0, 0, 0, 0.8)' : 'rgba(255, 255, 255, .65)',
            }}
             colorText={theme.palette.text.primary}
            >
                <ul className="items-sm">
                    <li>
                        <IconButton size="small" onClick={handleOpenMenuSm}>
                            {openNavBar ? <CloseSharpIcon fontSize="inherit" /> : <MenuSharpIcon fontSize="inherit"/>}
                        </IconButton>
                    </li>
                    <li>
                        <MyLogo />
                    </li>
                    <li>
                        <IconButton size="small" onClick={handleChangeTheme}> 
                            {darkTheme ? <DarkModeSharpIcon fontSize="inherit"/> : <LightModeSharpIcon fontSize="inherit"/>}
                        </IconButton>
                    </li>
                </ul>
                <ul className="items-lg" style={{display: openSearchBar ? 'none' : 'flex'}}>
                    <MyLogo />
                    <li>
                        <Link href="/top-rated">Top Rated</Link>
                    </li>
                    <li>
                        <Link href="/popular">Popular</Link>
                    </li>
                    <li>
                        <Link href="/now-playing">Now Playing</Link>
                    </li>
                    <li
                     onClick={handleClickCategoryMenu}
                    >
                        Categories
                    </li>
                    <li onClick={handleOpenSearch}>
                        <IconButton size="small">
                            <SearchSharpIcon fontSize="inherit"/>
                        </IconButton>
                    </li>
                    <li>
                        <IconButton size="small" onClick={handleChangeTheme}>
                            {darkTheme ? <DarkModeSharpIcon fontSize="inherit"/> : <LightModeSharpIcon fontSize="inherit"/>}
                        </IconButton>
                    </li>
                </ul>
            </AppBarWrapper>

            <Menu
             anchorEl={categoryAnchorEl}         
             open={openCategory}    
             onClose={handleCloseCategoryMenu}
            >
                {
                    categories.map(category => {
                        return(
                            <MenuItem key={category}>{toCapitalize(category)}</MenuItem>
                        )
                    })
                }
            </Menu>

            <Slide 
             direction="right" 
             mountOnEnter 
             unmountOnExit 
             in={openSearchBar}
            >
                <MyBackdrop style={{display: width >= 850 ? 'block' : 'none'}}>
                    <SearchBar style={{width: '80%'}} results={resultsMovies}/>
                </MyBackdrop>
            </Slide>
            <NavBar />
        </div>
    )
}