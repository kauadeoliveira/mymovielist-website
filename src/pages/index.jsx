import { Box, Button, ThemeProvider } from "@mui/material"
import { Container } from "@mui/system"
import Head from "next/head"
import { useSelector } from "react-redux"
import HeaderAppBar from "../ui/components/HeaderAppBar"
import MainBanner from "../ui/home/MainBanner"
import NavBar from "../ui/components/NavBar"
import MovieCard from "../ui/components/MovieCard"
import { Movies } from "./style"
import { useEffect } from "react"
import axios from "axios"
import { apiKey } from "../utils/apiKey"
import { Movie } from "@mui/icons-material"


export default function Home({ datas }) {
  return(
    <>
    <Head>
      <title>Home</title>
    </Head>
    <HeaderAppBar />
    <Container>
      <MainBanner />
      <h3 style={{margin: 0}}>All Movies</h3>
      <Movies>
        {datas.map(movie => {
          return(
            <MovieCard 
            key={movie.id}
            title={movie.title}
            img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            />
          )
        })}
      </Movies>
    </Container>
    </>
  )
}


export async function getServerSideProps() {
    const response = await Promise.all([
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`
      ).then(response => response.json()),
    fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
      ).then(response => response.json()),
  ]);


  const [popularMovies, topMovies] = await response;

  const datas = popularMovies.results.concat(topMovies.results)

  return { props: { datas } }
}
