import { useRoutes } from 'react-router-dom'

import { routes } from './'

export const Routes = () => {
    const routesList = useRoutes(routes)
    return routesList
}
