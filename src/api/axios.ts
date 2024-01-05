import axios from 'axios'

const BACKEND_BASE_URL = 'http://localhost:8000'

export default axios.create({
  baseURL: BACKEND_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})
