import { useState } from "react";
import { useSelector } from "react-redux";
import MyAppBar from "../ui/components/MyAppBar";
import MyCard from "../ui/components/MyCard";
import { apiKey } from "../utils/apiKey"
import { Movies, MyContainer, TitlePage } from "./style";

export async function getServerSideProps() {
    const response = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
    const data = await response.json();

    return { props: { data: data.results } }
}


export default function TopRated({ data }) {
    const { openNavBar } = useSelector(store => store.navBar)
    return(
        <MyContainer noDisplay={openNavBar}>
            <TitlePage>Top Rated Movies</TitlePage>
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