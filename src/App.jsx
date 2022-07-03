import { ThemeProvider } from '@mui/material/styles'
import { BrowserRouter } from 'react-router-dom'

import { theme } from './theme'

import { Layout } from './layout'
import { Routes } from './routes/Routes'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Layout>
                    <Routes />
                </Layout>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default App
