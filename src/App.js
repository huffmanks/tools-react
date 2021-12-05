import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Layout
import Layout from './components/layout'

// Pages
import CaseConverter from './components/pages/CaseConverter'
import ColorConverter from './components/pages/ColorConverter'

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/case-converter' element={<CaseConverter />} />
                    <Route path='/' element={<ColorConverter />} />
                    {/* <Route
                        path='/color-converter'
                        element={<ColorConverter />}
                    /> */}
                </Routes>
            </Layout>
        </Router>
    )
}

export default App
