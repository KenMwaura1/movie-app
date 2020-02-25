<v-btn round
              color="green"
              @click="singleMovie(item.imdbID)"
              >View </v-btn>

methods: {
    singleMovie (id) {
      this.$router.push('/movie/' + id)
    }
  }