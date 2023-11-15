import { reactive } from 'vue'

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    imageUrl: 'https://image.tmdb.org/t/p/w342',
    endPoint: {
        movie:"search/movie",
        series: "search/tv"
    },
    params :{
        api: '57c1fd25fdb62d9a100ae60009b3bf0b',
        query: '',
    },
    movieList: [],
    seriesList: [],

})