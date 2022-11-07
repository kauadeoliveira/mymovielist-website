import { useEffect } from "react";
import MyCard from "../ui/components/MyCard";
import { apiKey } from "../utils/apiKey";
import { Movies } from "./style";

export async function getServerSideProps() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
    const data = await response.json()

  return { props: { data: data.results } }
}

export default function NowPlaying({ data }) {

    return(
        <Movies>
            <h3 style={{margin: 0}}>Now Playing Movies</h3>

            {data.map(movie => {
                return(
                <MyCard 
                    key={movie.id}
                    rating={movie.vote_average}
                    img={movie.poster_path}
                    pathname={movie.id}
                />
                )
            })}
        </Movies>
    )
}