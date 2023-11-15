<template>
    <div class="row">
        <CardComponent :image="element.poster.path" :title="element.title" :votes="element.votes"
            :original_title="element.original_title" :language="element.language"
            v-for="(element, index) in store.movieList" :key="index" />
    </div>
</template>

<script>
import {store} from '../data/store.js';
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
    }

}
</script>

<style lang="scss" scoped></style>