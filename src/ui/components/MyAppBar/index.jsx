import { AppBarWrapper, Logo, MenuCategoriesContent} from "./style";

import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import ExpandMoreSharpIcon from '@mui/icons-material/ExpandMoreSharp';
import { Accordion, AccordionDetails, AccordionSummary, Box, Collapse, IconButton, List, ListItemButton, Menu, MenuItem, Slide, useTheme } from "@mui/material";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { navBarSlice } from "../../../store/slices/navBarSlice"
import { themeSlice } from "../../../store/slices/themeSlice"
import NavBar from "../NavBar";
import Image from "next/image";
import MyLogo from "./MyLogo";
import { useEffect } from "react";
import { useState } from "react";
import { allCategories } from "../../../utils/allCategories";
import { apiKey } from "../../../utils/apiKey";
import { toCapitalize } from "../../../utils/toCapitalize";
import SearchPage from "./SearchPage";
import { searchBarSlice } from "../../../store/slices/searchBarSlice";
import SearchBar from "../SearchBar";

export default function MyAppBar() {
    const theme = useTheme();
    const dispatch = useDispatch();


    const [categories, setCategories] = useState([])
    const [movieIds, setMovieIds] = useState([])

    const [anchorElMenuCategories, setAnchorElMenuCategories] = useState(null);
    const openMenuCategories = Boolean(anchorElMenuCategories)

    const handleOpenMenuCategories = (event) => setAnchorElMenuCategories(event.currentTarget);
    const handleCloseMenuCategories = () => setAnchorElMenuCategories(null)


    const [openSearch, setOpenSearch] = useState(false)
    const { openSearchBar } = useSelector(store => store.searchBarSlice)
    const handleOpenSearch = () => dispatch(searchBarSlice.actions.open())


    const { openNavBar } = useSelector(store => store.navBar);
    const { darkTheme } = useSelector(store => store.theme);

    const handleOpenMenuSm = () => dispatch(navBarSlice.actions.open())
    const handleChangeTheme = () => dispatch(themeSlice.actions.changeTheme())    

 
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
                const allMovies = response[0].results.concat(response[1].results);
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
        
        }
        getData()
        console.log(openSearchBar)
    }, [])



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
                    <li onClick={handleOpenMenuCategories}>
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
                <Slide 
                direction="left"
                 in={openSearchBar}
                 mountOnEnter
                 unmountOnExit
                >
                    <div className="search">
                        <SearchBar 
                         closeIcon={handleOpenSearch} 
                         style={{
                            width: '100%',
                            padding: '0 4px'}}/>
                    </div>
                </Slide>
            </AppBarWrapper>

            <Menu
             anchorEl={anchorElMenuCategories}
             open={openMenuCategories}
             onClose={handleCloseMenuCategories}
             sx={{top: '8px'}}
            >
                {categories.map(category => {
                    return(
                        <Link
                         href={`/category/${category}`}
                         key={category}
                         style={{
                            textDecoration: 'none',
                            color: theme.palette.text.primary 
                        }}
                        >
                            <MenuItem onClick={handleCloseMenuCategories}>
                                {toCapitalize(category)}
                            </MenuItem>
                        </Link>
                    )
                })}
            </Menu>

            <NavBar />
        </div>
    )
}