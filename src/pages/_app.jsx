// Material UI imports
import { 
  CssBaseline,
  Paper,
  createTheme,
  ThemeProvider
} from '@mui/material'

// Redux and Store imports
import {
  Provider,
  useDispatch,
  useSelector 
} from 'react-redux'
import { store } from "../store/store"

// React imports
import {  useMemo, useState } from 'react'
import HeaderAppBar from '../ui/components/HeaderAppBar'


// My Component
export default function MyApp({ Component, pageProps }) {
  // Mode theme
  const [mode, setMode] = useState(false)
  store.subscribe(() => setMode(store.getState().theme.darkTheme))
  
  // Configure Pallete
  const configureTheme = () => {
    const lightPalete = {
      primary: {
        light: '#484848',
        main: '#212121',
        dark: '#000000'
      },
    }

    const darkPalette = {
      primary: {
        light: '#e35183',
        main: '#ad1457',
        dark: '#78002e'
      },
    }
    return {
      palette: {
        mode: mode ? 'light' : 'dark', 
        ...(mode === 'light' ? lightPalete : darkPalette)
      },
    }
  }

    // Create Theme
    const theme = useMemo(() => createTheme(configureTheme()), [mode])
  

    // JSX
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <HeaderAppBar />
          <Component {...pageProps} />
          <CssBaseline />
        </ThemeProvider>
      </Provider>
    </>
  )
}

