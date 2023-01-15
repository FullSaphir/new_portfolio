import { post } from 'axios'

const URL = import.meta.env.VITE_DIRECTUS_URL

const logIn = async (email, password) => {
  const json = await post(URL + '/auth/login', { 
    "email": email,
    "password": password
  })
  return json.data
}

const refreshToken = async (token) => {
  const json = await post(URL + '/auth/refresh', { 
    "refresh_token": token,
  })
  return json.data
}

const logOut = async (token) => {
  const json = await post(URL + '/auth/logout', { 
    "refresh_token": token,
  })
  return json.data
}

export { logIn, logOut, refreshToken }