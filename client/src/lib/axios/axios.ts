import axios from 'axios'
import { getBrowserToken } from '../../utils/browser'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: { 'Content-Type': 'application/json' },
})

axiosInstance.interceptors.request.use((config) => {
  const token = getBrowserToken()
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})
