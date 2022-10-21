// import '../assets/globals.css'
import { CssBaseline, Paper } from '@mui/material'
import { Provider } from 'react-redux'
import { store } from "../store/store"
import { darkTheme } from '../ui/themes/darkTheme'
import { ThemeProvider } from '@mui/material/styles'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <Component {...pageProps} />
          <CssBaseline />
        </ThemeProvider>
      </Provider>
    </>
  )
}

export default MyApp
