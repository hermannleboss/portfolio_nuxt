import axios from 'axios'

export default axios.create({
  baseURL: 'https://localhost/',
  headers: {
    'Content-Type': 'application/json',
  },
})
