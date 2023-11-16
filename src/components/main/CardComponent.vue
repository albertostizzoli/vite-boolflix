<template>
   <div class="card col-3">
    <img :src="store.imageUrl + image" class="card-img-top" :alt="title" v-if="image">
    <img src="/img/logo.jpeg" alt="Logo" v-else>
    <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <h6 class="card-title">{{ original_title }}</h6>
        <p class="card-text">
            <i :class="{'fa-solid fa-star-half-stroke': media_voti > 0 && media_voti < 1,'fa-solid fa-star': media_voti > 0, 'fa-regular fa-star': media_voti === 0}"></i>
            <i :class="{'fa-solid fa-star-half-stroke': media_voti > 1 && media_voti < 2,'fa-solid fa-star': media_voti > 1, 'fa-regular fa-star': media_voti < 2}"></i>
            <i :class="{'fa-solid fa-star-half-stroke': media_voti > 2 && media_voti < 3,'fa-solid fa-star': media_voti > 2, 'fa-regular fa-star': media_voti < 3}"></i>
            <i :class="{'fa-solid fa-star-half-stroke': media_voti > 3 && media_voti < 4,'fa-solid fa-star': media_voti > 3, 'fa-regular fa-star': media_voti < 4}"></i>
            <i :class="{'fa-solid fa-star-half-stroke': media_voti > 4 && media_voti < 5,'fa-solid fa-star': media_voti > 4, 'fa-regular fa-star': media_voti < 5}"></i>
            {{ votes }}</p>
        <p v-if="language === 'en'">
                Lingua:
                <img src="/img/british-flag-12.gif" alt="british flag"> 
            </p>
            <p v-else-if="language === 'it'">
                Lingua:
                <img src="/img/italian-flag-9.gif" alt="italian flag"> 
            </p>
            <p v-else-if="language === 'de'">
                Lingua:
                <img src="/img/german-flag-3.gif" alt="german flag"> 
            </p>
            <p v-else-if="language === 'es'">
                Lingua:
                <img src="/img/spanish-flag-17.gif" alt="spanish flag"> 
            </p>
            <p v-else-if="language === 'fr'">
                Lingua:
                <img src="/img/france-flag.gif" alt="france flag"> 
            </p>
        <h5 v-else class="card-text">{{ language }}</h5>
    </div>
   </div>
</template>

<script>
import {store} from '../../data/store.js';
    export default {
        name: 'CardComponent',
        props: {
            original_title:{
                type: String,
                required: true,
            },

             image: {
                type: String,
                required: false,
            },
            title: {
                type: String,
                required: true,
            },
            votes: {
                type: Number,
                required: false,
            },
            language: {
                type: String,
                required: true,
            },
        },
        data(){
            return {
                store,
            }
        }
        
    }
</script>

<style lang="scss" scoped>
p{
    img{
        width: 20px;
    }
}

</style>