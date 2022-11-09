import { useEffect } from "react";
import { useSelector } from "react-redux";
import MyCard from "../ui/components/MyCard";
import { apiKey } from "../utils/apiKey";
import { Movies, MyContainer, TitlePage } from "./style";

export async function getServerSideProps() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`)
    const data = await response.json()

  return { props: { data: data.results } }
}

export default function NowPlaying({ data }) {
    const { openNavBar } = useSelector(store => store.navBar)
    return(
        <MyContainer noDisplay={openNavBar}>
            <TitlePage>Now Playing</TitlePage>
            <Movies>
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
        </MyContainer>
    )
}