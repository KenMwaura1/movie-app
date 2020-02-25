import axios from 'axios'

export default {

  async fetchMovieCollection (name) {
    const response = await axios.get('&s=' + name)
    return response.data
  },

  fetchSingleMovie (id) {
    return axios.get('&i=' + id)
      .then(response => {
        return response.data
      })
  }
}
