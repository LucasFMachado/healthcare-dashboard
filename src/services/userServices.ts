import { SingInFormValues } from '@/types/user'

export const UserService = {
  login: ({ username, password, remember }: SingInFormValues) => {
    try {
      console.log('Login form values: ', { username, password, remember })
    } catch {
      console.error('Error on login function')
    }
  },
  logout: () => {
    try {
      console.log('Logout')
    } catch {
      console.error('Error on logout function')
    }
  },
}
