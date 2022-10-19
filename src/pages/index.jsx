import Head from "next/head"
import NavBar from "../components/NavBar"


export default function Home() {
  console.log('poggers')
  return(
    <>
      <Head>
        <title>Home</title>
        <meta name="keyworks" content="Movies"></meta>
        <meta name="description" content="Encontre as melhores recomendações de filmes aqui"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <NavBar />
    </>
  )
}
