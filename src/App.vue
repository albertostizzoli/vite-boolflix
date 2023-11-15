<template>
  <main>
    <section id="movie" class="container">
      <h2>Movies</h2>
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3" v-for="(movie, index) in store.movieList" :key="movie.id">
          {{ movie.title }}
        </div>
      </div>
    </section>
    <section id="series" class="container">
      <h2>Tv</h2>
      <div class="row">
        <div class="col-12 col-md-4 col-lg-3" v-for="(serie, index) in store.seriesList" :key="serie.id">
          {{ serie.name }}
          <img src="'https://'" alt="">
        </div>
      </div>
    </section>

  </main>
</template>

<script>
import axios from 'axios'
import { store } from './store.js'
export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  methods: {
    getMoviesAndSeries() {
      const movieurl = store.apiUrl + this.store.endPoint.movies;
      axios.get(movieurl, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.movieList = res.data.results;
      });
      const tvurl = store.apiUrl + this.store.endPoint.series;
      axios.get(tvurl, { params: this.store.params }).then((res) => {
        console.log(res.data.results);
        this.store.seriesList = res.data.results;
      });
    }
  },
  created() {
    this.getMoviesAndSeries();

  }
}

</script>

<style lang="scss" scoped>
</style>
