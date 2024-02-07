import { AuthProvider } from './auth/context'
import { AppRoute } from './router/AppRoute'

export const Herores = () => {
  return (
    <AuthProvider>


      <AppRoute />
    </AuthProvider>
  )
}
