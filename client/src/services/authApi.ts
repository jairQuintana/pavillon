import axios from 'axios'

export const getAuthentication = async () => {
  try {
    const { data } = await axios.get('/api/auth/login')
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
export const getMe = async () => {
  try {
    const { data } = await axios.get('/api/auth/me')
    return data
  } catch (err) {
    console.error(err)
    throw err
  }
}
