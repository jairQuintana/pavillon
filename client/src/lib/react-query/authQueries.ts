import { useQuery, useMutation } from '@tanstack/react-query'
import { login } from '../../services/authApi'

export const useGetAuthentication = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      return true
    },
  })
}

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      console.log('Login successful')
    },
  })
}
