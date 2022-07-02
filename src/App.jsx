import { BrowserRouter as Router } from 'react-router-dom'

import { ThemeProvider, createTheme } from '@mui/material/styles'

// Layout
import Layout from './components/layout'

import Routes from './components/Routes'

const theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#1e1e1e',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#fefefe',
        },
        primary: {
            main: '#8a6e4b;',
        },
        secondary: {
            main: '#333333;',
        },
    },
    typography: {
        fontFamily: `'Montserrat', sans-serif`,
        h3: {
            marginBottom: '2rem',
            textTransform: 'uppercase',
            fontWeight: 700,
        },
    },
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Layout>
                    <Routes />
                </Layout>
            </Router>
        </ThemeProvider>
    )
}

export default App
