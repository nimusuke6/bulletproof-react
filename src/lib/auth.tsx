import { Spinner } from '@/components/Elements/Spinner'
import {
  AuthUser,
  LoginCredentialsDTO,
  RegisterCredentialsDTO,
  UserResponse,
  registerWithEmailAndPassword,
} from '@/features/auth'
import storage from '@/utils/storage'
import { initReactQueryAuth } from 'react-query-auth'

async function handleUserResponse(data: UserResponse) {
  const { jwt, user } = data
  storage.setToken(jwt)
  return user
}

async function loadUser() {
  return null
}

async function loginFn() {
  return null
}

async function registerFn(data: RegisterCredentialsDTO) {
  const response = await registerWithEmailAndPassword(data)
  const user = await handleUserResponse(response)
  return user
}

async function logoutFn() {}

const authConfig = {
  loadUser,
  loginFn,
  registerFn,
  logoutFn,
  LoaderComponent() {
    return (
      <div className="w-screen h-screen flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    )
  },
}

export const { AuthProvider, useAuth } = initReactQueryAuth<
  AuthUser | null,
  unknown,
  LoginCredentialsDTO,
  RegisterCredentialsDTO
>(authConfig)
