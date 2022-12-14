import { Box, Button, ThemeProvider } from "@mui/material"
import { Container } from "@mui/system"
import Head from "next/head"
import { useDispatch, useSelector } from "react-redux"
import HeaderAppBar from "../ui/components/HeaderAppBar"
import MainBanner from "../ui/home/MainBanner"
import NavBar from "../ui/components/NavBar"
import MyCard from "../ui/components/MyCard"
import { Movies, MyContainer, TitlePage } from "./style"
import { useEffect } from "react"
import axios from "axios"
import { apiKey } from "../utils/apiKey"
import { Movie } from "@mui/icons-material"
import Link from "next/link"
import { dataMoviesSlice } from "../store/slices/dataMoviesSlice"


export async function getServerSideProps() {
  const response = await Promise.all([
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
  ).then(response => response.json()),
  fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
  ).then(response => response.json()),
  ]);


  const [popularMovies, topMovies] = response;

  const datas = popularMovies.results.concat(topMovies.results)

  return { props: { datas } }
}

export default function Home({ datas }) {
  const bannerMovie = datas[0];
  const movies = datas.slice(1)
  const { openNavBar } = useSelector(store => store.navBar)


  return(
    <>
    <Head>
      <title>Home</title>
    </Head>

    <MyContainer noDisplay={openNavBar}>
      <MainBanner 
        img={bannerMovie.backdrop_path}
        pathname={bannerMovie.id}
        title={bannerMovie.original_title}
      />

      <TitlePage>All Movies</TitlePage>
      <Movies>
          {movies.map(movie => {
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
    </>
  )
}