import { Button, ThemeProvider } from "@mui/material"
import { Container } from "@mui/system"
import Head from "next/head"
import { useSelector } from "react-redux"
import HeaderAppBar from "../ui/components/HeaderAppBar"
import MainBanner from "../ui/components/MainBanner"
import NavBar from "../ui/components/NavBar"


export default function Home() {
  return(
    <>
    <Head>
      <title>Home</title>
    </Head>
    <HeaderAppBar />
    </>
  )
}
