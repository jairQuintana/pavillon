import { useQuery } from '@tanstack/react-query'

export const useGetAuth = () => {
  return useQuery({
    queryKey: ['auth'],
    queryFn: () => ['holaa'],
  })
}
