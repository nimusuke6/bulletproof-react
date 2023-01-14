import { Landing } from '@/features/misc'
import { publicRoutes } from '@/routes/public'
import { RouteObject, useRoutes } from 'react-router-dom'

export const AppRoutes = () => {
  const commonRoutes: RouteObject[] = [{ path: '/', element: <Landing /> }]

  const routes = publicRoutes

  const element = useRoutes([...routes, ...commonRoutes])

  return <>{element}</>
}
