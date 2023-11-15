<template>
   <div class="card col-3">
    <img :src="store.imageUrl + url_image" class="card-img-top" :alt="title" v-if="url_image">
    <img src="/img/logo.jpeg" alt="default" v-else>
    <div class="card-body">
        <h4 class="card-title">{{ title }}</h4>
        <h6 class="card-title">{{ original_title }}</h6>
        <p class="card-text">{{ votes }}</p>
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
            url_image:{
                type: String,
                required: false,
            },

            title: {
                type: String,
                required: true,
            },
            votes: {
                type: String,
                required: false,
            },
            original_title: {
                type: String,
                required: true,
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