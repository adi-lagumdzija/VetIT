import axios from 'axios'

const API_URL = '/api/dogs/'



// Get user dogs
const getDogs = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}



const dogService = {
  getDogs,
}

export default dogService