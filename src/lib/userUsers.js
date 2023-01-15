import * as axios from 'axios'

const URL = import.meta.env.VITE_DIRECTUS_URL
const REQUEST_TIMEOUT =  15000

const fetchUsers = async (roleID, token) => {
  try {
    let result = []
    let json = null
    if (roleID=="244925fe-4be3-4675-ac0a-b09b65fea45e"){
      json = await axios.get(
        URL + '/users/?access_token=' + token,
        { timeout: REQUEST_TIMEOUT }
      )
    }
    else {
      json = await axios.get(
        URL + '/users/?access_token=' + token + "&filter[role][_eq]=" + roleID,
        { timeout: REQUEST_TIMEOUT }
      )
    }
    result = json.data.data
    return result
  } catch (error) {
    throw error
  }
}

const deleteUser = async (userID, token) => {
  try {
    const json = await axios.patch(
      URL + '/users/' + userID + '?access_token=' + token,
      { 
        status: 'suspended',
        timeout: REQUEST_TIMEOUT
      })
    let result = json.data.data
    console.log(result)
    return result
  }
  catch (error){
    throw error
  }
}

const activateUser = async (userID, token) => {
  try {
    const json = await axios.patch(
      URL + '/users/' + userID + '?access_token=' + token,
      { 
        status: 'active',
        timeout: REQUEST_TIMEOUT
      })
    let result = json.data.data
    console.log(result)
    return result
  }
  catch (error){
    throw error
  }
}

const createUser = async (login, password, roleID, token) => {
  try {
    const json = await axios.post(
      URL + "/users" + '?access_token=' + token,
      {
        first_name:login,
        email:login,
        password:password,
        role:roleID
      }
    )
  }
  catch(error) {
    throw error
  }
}

export { fetchUsers, deleteUser, createUser, activateUser  }