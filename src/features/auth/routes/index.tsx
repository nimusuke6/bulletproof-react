import { Route, Routes } from 'react-router-dom'

import { Register } from '@/features/auth/routes/Register'

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
    </Routes>
  )
}
