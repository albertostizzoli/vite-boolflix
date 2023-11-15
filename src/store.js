import { reactive } from 'vue'

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3',
    endPoint: {
        movies:"search/movie",
        series: "search/tv"
    },

    api: '57c1fd25fdb62d9a100ae60009b3bf0b',
    query: 'a',
    error:"",
    loading: true,
    movieList: [],
    seriesList: []

})