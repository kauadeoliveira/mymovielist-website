// React Imports
import { useEffect } from "react";

// Next Imports
import Link from "next/link";

// Material UI and style Imports
import { 
    Button,
    IconButton,
    useTheme
} from "@mui/material";
import MyCard from "../../ui/components/MyCard";
import { 
    Details,
    Description,
    Poster,
    OverviewDescription,
    TitleDescription,
    Cast
} from "./style"
import StarSharpIcon from '@mui/icons-material/StarSharp';

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";

// Other Imports
import { apiKey } from "../../utils/apiKey"
import { useSelector } from "react-redux";
import { MyContainer } from "../style";

export async function getStaticProps(context) {
    const {params} = context;
    const response = await Promise.all([
        fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=${apiKey}&language=en-US`
        ).then(response => response.json()),
        fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}/credits?api_key=${apiKey}&language=en-US`
        ).then(response => response.json())
    ]);

    const [details, credits] = response;

    return{
        props: { details, credits }
    }
}

export async function getStaticPaths() {
    const response = await Promise.all([
        fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
          ).then(response => response.json()),
        fetch(
          `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
          ).then(response => response.json()),
    ]);

    const [popularMovies, topMovies] = response;

    const allMovies = popularMovies.results.concat(topMovies.results);
    const paths = allMovies.map(movie => {
        return {
            params: {
                movieId: `${movie.id}`
            }
        }
    })

    return { paths, fallback: false }
}

export default function Movie({ details, credits }) {
    const { openNavBar } = useSelector(store => store.navBar)
    const {palette} = useTheme()
    const {
        genres,
        release_date,
        original_title,
        vote_average,
        runtime,
        poster_path,
        overview,
    } = details 
    
    const directors = credits.crew.filter(crew => {
        return crew.known_for_department === 'Directing' ? true : false
    })

    const formatTime = (time) => {
        const hour = Math.floor(time/60)
        const minutes = Math.round((time/60 - hour) * 60)

        if(minutes === 0){
            return `${hour}h`
        }else if(hour === 0){
            return `${minutes}m`
        }else{
            return `${hour}h ${minutes}m`
        }
    }

    const handleRepeatedIds = (arr) => {
        const id = []

        arr.map(obj => {
            if(!id.includes(obj.id)) id.push(obj.id)
        })

        const newArray = []

        id.map(id => {
            newArray.push(arr.find(obj => obj.id === id))
        })
        return newArray
    }

    const handleManyGenres = (arrGenres) => {
        if(arrGenres.length > 3){
            return arrGenres.splice(0, 3)
        }else{
            return arrGenres
        }
    }
    return(
        <MyContainer noDisplay={openNavBar}>
            <Details>
                <Poster img={`https://image.tmdb.org/t/p/w500${poster_path}`}/>
                <Description>
                    <TitleDescription>
                        <h1 className="movie-title">
                            <span className="title" style={{color: palette.text.primary}}>{original_title}</span>
                            <span className="date" style={{color: palette.text.disabled}}>({release_date.split('-')[0]})</span>
                        </h1>
                        <div className="advanced-details" style={{color: palette.text.primary}}>
                            <span className="rating" >
                                {vote_average.toFixed(1)}
                                <StarSharpIcon sx={{fontSize: '.5rem', color: 'orange'}}/>
                            </span>
                            <span className="genres" >
                                {handleManyGenres(genres).map(genre => {
                                    return(
                                        <Link href="#" key={genre.id}>{genre.name}</Link>
                                    )
                                })}
                            </span>
                            <span className="runtime">{formatTime(runtime)}</span>
                        </div>
                    </TitleDescription>
                    <OverviewDescription>
                        <p>{overview}</p>
                        <ul className="directors" style={{color: palette.text.disabled}}>
                            <span>Direction:</span>
                            {handleRepeatedIds(directors).map(director => {
                                return(
                                    <li key={director.id}>{director.name}</li>
                                )
                            })}
                        </ul>
                    </OverviewDescription>
                </Description>
            </Details>
            <Cast>
                <h2>Cast</h2>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    >
                    {credits.cast.map(actor => {
                        return(
                        <SwiperSlide key={actor.id}>
                            <MyCard
                                img={actor.profile_path}
                                description={{
                                    title: actor.name,
                                    subTitle: actor.character
                                }}
                            />
                        </SwiperSlide>
                        )
                    })}
                </Swiper>
            </Cast>
        </MyContainer>
    )
}















