<template>
  <div v-show="startLogin">
    <LoginSection @newProfile="newProfile" @showApp="showApp = true, startLogin = false" />
  </div>
  <div v-show="showApp">
      <header class="w-100 p-4 bg-black">
        <HeaderSection @search="playMoviesandSeries"/>
      </header>
      <main>
        <div class="box">
          <MainSection />
        </div>
      </main>
  </div>
</template>

<script>
import HeaderSection from './components/HeaderSection.vue';
import LoginSection from './components/LoginSection.vue';
import MainSection from './components/MainSection.vue';
import axios from 'axios'
import { store } from './data/store.js';
export default {
  name: 'App',
  components: {
    MainSection,
    LoginSection,
    HeaderSection,
  },
  data() {
    return {
      showApp: false,
      startLogin: true
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
    newProfile(name){
        if(name.trim() !== ''){
            store.listProfiles.push({
                id: store.listProfiles.length + 1,
                name: name,
                profilePic: '/img/default-profile-picture1.jpg'
            })
            console.log(store.listProfiles);
        }
      },
  },
  created() {
    this.playMoviesandSeries();
  },
}
</script>

<style lang="scss" scoped>
.box{
  max-width: 1200px;
  margin: 0 auto;
}

main{
  background-color: rgba(0,0,0,0.5);
}

</style>
