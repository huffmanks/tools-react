import { BrowserRouter as Router } from 'react-router-dom'

// Layout
import Layout from './components/layout'

import Routes from './components/Routes'

const App = () => {
    return (
        <Router>
            <Layout>
                <Routes />
            </Layout>
        </Router>
    )
}

export default App
