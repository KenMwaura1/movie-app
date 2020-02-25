import axios from 'axios'

export default {

  async fetchMovieCollection (name) {
    const response = await axios.get('&s=' + name)
    return response.data
  },

  async fetchSingleMovie (id) {
    const response = await axios.get('&i=' + id)
    return response.data
  }
}
