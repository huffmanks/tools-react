import { useRoutes } from 'react-router-dom'

import { routesList } from './routesList'

const Routes = () => {
    const routes = useRoutes(routesList)
    return routes
}

export default Routes
