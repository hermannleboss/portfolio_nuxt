import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhos:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getRealisations() {
    return apiClient.get('/realisations')
  },
  getRealisation(id: number) {
    return apiClient.get('/realisations/' + id)
  }
}
