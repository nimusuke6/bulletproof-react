import { Landing } from '@/features/misc'
import { RouteObject, useRoutes } from 'react-router-dom'

export const AppRoutes = () => {
  const commonRoutes: RouteObject[] = [{ path: '/', element: <Landing /> }]

  const element = useRoutes([...commonRoutes])

  return <>{element}</>
}
