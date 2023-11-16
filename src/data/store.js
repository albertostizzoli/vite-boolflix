import { reactive } from 'vue'

export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    imageUrl: 'https://image.tmdb.org/t/p/w342',
    endPoint: {
        movie:"search/movie",
        series: "search/tv"
    },
    params :{
        api_key: '57c1fd25fdb62d9a100ae60009b3bf0b',
        query: '',
    },
    movieList: [],
    seriesList: [],
    listProfiles: [
        {
            id: 1,
            name: 'Alberto',
            profilePic: '/img/spiderman.png',
            descriptionPic: 'spiderman-pic',
            adult: true,
        },
        {  
            id:2,
            name: 'Bambini',
            profilePic: '/img/kidprofile.png',
            descriptionPic: 'kid-pic',
            adult: false,
        }
    ],
    profileIndex: 0,
    showMain: false,
})
