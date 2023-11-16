<template>
    <section>
        <h2>Movies</h2>
        <div class="row">
            <CardComponent 
            :image="element.poster_path"
            :title="element.title"
            :votes="getVote(element.vote_average)"
            :original_title="element.original_title"
            :language="element.original_language"
            v-for="(element, index) in store.movieList" :key="index" />
        </div>
    </section>
    <section>
        <h2>Series</h2>
        <div class="row">
            <CardComponent 
            :image="element.poster_path" 
            :title="element.name" 
            :votes="element.vote_average"
            :original_title="element.original_name" 
            :language="element.original_language"
            v-for="(element, index) in store.seriesList" :key="index" />
        </div>
    </section>
</template>

<script>
import { store } from '../data/store.js';
import CardComponent from './main/CardComponent.vue';
export default {
    name: 'MainComponent',
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
        }
    },
}
</script>

<style lang="scss" scoped></style>