import { useRoutes } from 'react-router-dom'

import { routesArray } from './routesArray'

const Routes = () => {
    const routes = useRoutes(routesArray)
    return routes
}

export default Routes
