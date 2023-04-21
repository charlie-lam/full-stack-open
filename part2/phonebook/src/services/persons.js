import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

export const getAll = () => {
  const response = axios.get(baseUrl)
  return response.then(res => res.data)
}

