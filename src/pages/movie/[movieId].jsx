import { Button, IconButton, useTheme } from "@mui/material";
import { useEffect } from "react";
import { apiKey } from "../../utils/apiKey"
import { Description, Details, Poster } from "./style"
import StarSharpIcon from '@mui/icons-material/StarSharp';
import Link from "next/link";
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

    const [details, credits] = await response;

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

    const [popularMovies, topMovies] = await response;

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
    console.log(details)

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

    const theme = useTheme()
    return(
        <Details>
            <Poster poster={`https://image.tmdb.org/t/p/w500${details.poster_path}`}/>
            <Description>
                <div className="boxTitle">
                    <h2>{details.title}</h2>
                    <div className="about">
                        <span className="release">{details.release_date.split('-')[0]}</span>
                        <span className="rating">
                            {details.vote_average.toFixed(1)}
                            <StarSharpIcon sx={{fontSize:'.6rem', color: 'orange'}}/>
                        </span>
                        <span className="runtime">{formatTime(details.runtime)}</span>
                    </div>
                </div>

                <div className="overview">
                    <h3>Overview</h3>
                    <p>{details.overview}</p>
                </div>

                <div className="credits">
                    <ul className="crew">
                        <span>Crew:</span>
                        {credits.crew.map(crew => {
                            return(
                                <li key={crew.id}>{crew.name}</li>
                            )
                        })}
                    </ul>
                    <ul className="genres">
                        <span>Genres:</span>
                        {details.genres.map(genre => {
                            return(
                                <li key={genre.id}>
                                    <Link href="#">{genre.name}</Link>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </Description>
        </Details>
    )
}