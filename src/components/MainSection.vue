<template>
    <section class="container">
        <div class="row flex-wrap">
            <CardComponent 
            :image="element.poster_path" 
            :title="element.name" 
            :votes="getVote(element.vote_average)"
            :original_title="element.original_name" 
            :language="element.original_language"
            :plot="element.overview"
            v-for="(element, index) in store.seriesList" :key="index" />
        </div>
    </section>
    <section class="container">
        <div class="row flex-wrap">
            <CardComponent 
            :image="element.poster_path" 
            :title="element.title" 
            :votes="getVote(element.vote_average)"
            :original_title="element.original_title" 
            :language="element.original_language"
            :plot="element.overview"
            v-for="(element, index) in store.movieList" :key="index" />
        </div>
    </section>
</template>

<script>
import { store } from '../data/store.js';
import CardComponent from './main/CardComponent.vue';
export default {
    name: 'MainSection',
    components: {
        CardComponent,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getVote(vote) {
            let newVote = vote / 2;
            let roundedVote = Math.round(newVote * 2) / 2;
            return roundedVote
        },
    },
}
</script>

<style lang="scss" scoped>

</style>