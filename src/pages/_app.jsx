// import '../assets/globals.css'
import { CssBaseline, Paper } from '@mui/material'
import { Provider, useSelector } from 'react-redux'
import { store } from "../store/store"
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { useEffect, useMemo, useState } from 'react'


export default function MyApp({ Component, pageProps }) {
  const {darkTheme} = store.getState().theme
  const [modePalette, setModePalette] = useState()

  store.subscribe(() => {setModePalette(!darkTheme)})

  const configureTheme = (modePalette) => {
    const mode = modePalette ? 'dark' : 'light'
    const lightPalete = {
      primary: {
        light: '#484848',
        main: '#212121',
        dark: '#000000'
      },
      background: {
        paper: '#fff'
      }
    }

    const darkPalette = {
      primary: {
        light: '#e35183',
        main: '#ad1457',
        dark: '#78002e'
      },
      text: {
        primary: {
          
        }
      }
    }
    return {
      palette: {
        mode: mode, 
        ...(mode === 'light' ? lightPalete : darkPalette)
      },
    }
  }

  


    const theme = useMemo(() => createTheme(configureTheme(modePalette)), [modePalette])
  
    console.log(theme)

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <CssBaseline />
        </ThemeProvider>
      </Provider>
    </>
  )
}

