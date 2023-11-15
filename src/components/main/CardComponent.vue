<template>
   <div class="card col-2">
    <img :src="store.imageUrl + image" class="card-img-top" :alt="title">
    <div class="card-body">
        <h4>{{ title }}</h4>
        <h6>{{ original_title }}</h6>
        <p>{{ votes }}</p>
        <h5>{{ language }}</h5>
    </div>
   </div>
</template>

<script>
import {store} from '../../data/store.js';
    export default {
        name: 'CardComponent',
        props: {
            image: String,
            title: String,
            votes: String,
            original_title: String,
            language: String,
        },
        data(){
            return {
                store,
            }
        }
        
    }
</script>

<style lang="scss" scoped>

</style>