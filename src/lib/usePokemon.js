import * as axios from 'axios'

const URL = import.meta.env.VITE_DIRECTUS_URL
const REQUEST_TIMEOUT =  15000

const getCurrentTeam = async (teamID, token) => {
  console.log(token)
  try {
    let result = []
    const json = await axios.get(
      URL + '/items/pokeTeam?access_token=' + token + '&filter[id][_eq]=' + teamID,
      { timeout: REQUEST_TIMEOUT }
    )
    result = json.data.data
    return result
      
  } catch (error) {
    console.log(error)
    throw error
  }
}

//return response.data.sprites.front_default
const getPokemonByID  = async (pokemonID) => {
  try {
    let result = []
    const json = await axios.get('https://pokeapi.co/api/v2/pokemon/' + pokemonID)

    result = json.data.sprites.front_default
    console.log(result)
    return result
      
  } catch (error) {
    console.log(error)
    throw error
  }
}

export { getCurrentTeam, getPokemonByID }