import { useQuery, useMutation } from '@tanstack/react-query'
import { getMe, loginService } from '../../services/authApi'
import { setBrowserToken } from '../../utils/browser'
import { useNavigate } from 'react-router'

export const useGetAuthentication = (enabled: boolean) => {
  return useQuery({
    queryKey: ['authentication'],
    queryFn: getMe,
    enabled,
    retry: 2,
  })
}

export const useLogin = () => {
  const navigate = useNavigate()
  return useMutation({
    mutationFn: loginService,
    onSuccess: (data) => {
      setBrowserToken(data.token)
      navigate('/app')
    },
  })
}
