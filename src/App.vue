<template>
  <SearchBar @search="playMovies(), playSeries()"/>
  <MainComponent/>
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
      store
    }
  },
  methods: {
    playMovies() {
      const url = store.apiUrl + store.endPoint.movies
      axios.get(url, { params: store.params }).then((res) => {
        console.log(res.data.results);
        store.movieList = res.data.results
      })
      store.params.query = '';
    },
    playSeries() {
      const url = store.apiUrl + store.endPoint.series
      axios.get(url, { params: store.params }).then((res) => {
        console.log(res.data.results);
        store.seriesList = res.data.results
      })
      store.params.query = '';
    }
  },
  created() {
  },
}

</script>

<style lang="scss" scoped></style>
