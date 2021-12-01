import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout
import Layout from './components/layout'

// Pages
import ColorConverter from './components/pages/ColorConverter'

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    {/* <Route
                        path='/color-converter'
                        element={<ColorConverter />}
                    /> */}
                    <Route path='/' element={<ColorConverter />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
