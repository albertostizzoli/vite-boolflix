<template>
  <div class="container">
    <header>
      <SearchBar @search="playMoviesandSeries" />
    </header>
    <main>
      <MainComponent />
    </main>
  </div>
</template>

<script>
import MainComponent from './components/MainComponent.vue';
import SearchBar from './components/SearchBar.vue';
import axios from 'axios'
import { store } from './data/store.js';
export default {
  name: 'App',
  components: {
    SearchBar,
    MainComponent,
  },
  data() {
    return {
    }
  },
  methods: {
    playMoviesandSeries() {
      const movieUrl = store.apiUrl + store.endPoint.movie
      axios.get(movieUrl, { params: store.params }).then((res) => {
        console.log(res.data.results);
        store.movieList = res.data.results
      })
      const seriesUrl = store.apiUrl + store.endPoint.series
      axios.get(seriesUrl, { params: store.params }).then((res) => {
        console.log(res.data.results);
        store.seriesList = res.data.results
      })
      store.params.query = '';
    },
  },
  created() {
  },
}

</script>

<style lang="scss" scoped></style>
