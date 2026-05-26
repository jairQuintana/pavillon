import { AUTH_TOKEN_KEY } from '../constants/Constants'

export const getBrowserToken = (): string | null => localStorage.getItem(AUTH_TOKEN_KEY)
export const setBrowserToken = (token: string | null) => {
  console.log('Setting browser token:', token)
  if (token) {
    localStorage.setItem(AUTH_TOKEN_KEY, token)
  } else {
    localStorage.removeItem(AUTH_TOKEN_KEY)
  }
}
