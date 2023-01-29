import { Layout } from '@/features/auth/components/Layout'
import { RegisterForm } from '@/features/auth/components/RegisterForm'
import { useNavigate } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate()

  return (
    <Layout title="Register your account">
      <RegisterForm onSuccess={() => navigate('/')} />
    </Layout>
  )
}
