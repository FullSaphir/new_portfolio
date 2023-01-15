import * as axios from 'axios'

const URL = import.meta.env.VITE_DIRECTUS_URL
const REQUEST_TIMEOUT =  15000

const fetchCollection = async (roleName, token) => {
  console.log(token)
  try {
    let result = []
    //let user =  await getCurrentUser(token)
    const json = await axios.get(
      URL + '/items/Cards?access_token=' + token,
      { timeout: REQUEST_TIMEOUT }
    )
    result = json.data.data
    return result
      
  } catch (error) {
    console.log(error)
    throw error
  }
}

// const fetchCollection = async (roleName, token) => {
//   console.log(token)
//   try {
//     let result = []
//     //let user =  await getCurrentUser(token)
//     const json = await axios.get(
//       URL + '/items/Cards?access_token=' + token + "&filter[Team][_eq]=" + roleName,
//       { timeout: REQUEST_TIMEOUT }
//     )
//     result = json.data.data
//     return result
      
//   } catch (error) {
//     console.log(error)
//     throw error
//   }
// }

const createCard = async (title, description, role, token) => {
  let item = {
    "title": title,
    "description": description,
    "team": role
  }

  try {
    await axios.post(URL + '/items/Cards?access_token=' + token, item, { timeout: REQUEST_TIMEOUT })
  }
  catch(error){
    console.log('unable to create card', error)
    throw error
  } 
}

const del = async (id, token) => {
  try {
    await axios.delete(URL + '/items/Cards/' + id + '?access_token=' + token , { timeout: REQUEST_TIMEOUT })
  }
  catch(error){
    console.log('unable to delete card', error)
    throw error
  } 
}

const getCurrentUser = async (token) => {
  try {
    let result = []

    const json = await axios.get(
      URL + '/users/me?access_token=' + token,
      { timeout: REQUEST_TIMEOUT }
    )

    result = json.data.data
    return result
      
  } catch (error) {
    console.log(error)
    throw error
  }
}

const getRoleName = async (roleID, token) => {
  try {
    let result = []

    const json = await axios.get(
      URL + '/roles/' + roleID + '?access_token=' + token,
      { timeout: REQUEST_TIMEOUT }
    )

    result = json.data.data
    return result
      
  } catch (error) {
    console.log(error)
    throw error
  }
}

const getRoleID = async (roleName, token) => {
  try {
    const json = await axios.get(
      URL + '/roles/?access_token=' + token + '&filter[name][_eq]=' + roleName,
      { timeout: REQUEST_TIMEOUT }
    )
    let result = json.data.data
    return result[0].id
      
  } catch (error) {
    console.log(error)
    throw error
  }
}

const getPokeTeam = async (pokeTeamID, token) => {
  try {
    const json = await axios.get(
      URL + '/items/pokeTeam?access_token=' + token + '&filter[id][_eq]=' + pokeTeamID,
      { timeout : REQUEST_TIMEOUT }
    )
    let result = json.data.data
    return result
  }
  catch (error){
    console.log(error)
    throw error
  }
}


export { fetchCollection, getCurrentUser, createCard, del, getRoleName, getRoleID, getPokeTeam }