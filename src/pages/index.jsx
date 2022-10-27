import { Box, Button, ThemeProvider } from "@mui/material"
import { Container } from "@mui/system"
import Head from "next/head"
import { useSelector } from "react-redux"
import HeaderAppBar from "../ui/components/HeaderAppBar"
import MainBanner from "../ui/home/MainBanner"
import NavBar from "../ui/components/NavBar"
import MovieCard from "../ui/components/MovieCard"


export default function Home() {
  return(
    <>
    <Head>
      <title>Home</title>
    </Head>
    <HeaderAppBar />
    <Container>
      <MainBanner />
      <Box>
        <MovieCard
          title={'Rick and Morty'}
          img="https://www.themoviedb.org/t/p/w220_and_h330_face/cvhNj9eoRBe5SxjCbQTkh05UP5K.jpg"
        />
      </Box>
    </Container>
    </>
  )
}
