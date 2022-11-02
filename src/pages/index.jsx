import { Box, Button, ThemeProvider } from "@mui/material"
import { Container } from "@mui/system"
import Head from "next/head"
import { useSelector } from "react-redux"
import HeaderAppBar from "../ui/components/HeaderAppBar"
import MainBanner from "../ui/home/MainBanner"
import NavBar from "../ui/components/NavBar"
import MyCard from "../ui/components/MyCard"
import { Movies } from "./style"
import { useEffect } from "react"
import axios from "axios"
import { apiKey } from "../utils/apiKey"
import { Movie } from "@mui/icons-material"
import Link from "next/link"


export default function Home({ datas }) {
  console.log(datas)
  return(
    <>
    <Head>
      <title>Home</title>
    </Head>
    <Container>
      <MainBanner />
      <h3 style={{margin: 0}}>All Movies</h3>
      <Movies>
        {datas.map(movie => {
          return(
            <MyCard 
              key={movie.id}
              title={movie.title}
              rating={movie.vote_average}
              img={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              pathname={movie.id}
              subTitle={movie.release_date.split('-')[0]}
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
