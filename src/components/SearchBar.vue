<template>
    <div class="input-group flex-nowrap ">
        <input class="form-control" type="text" v-model="store.params.query" @keyup.enter="$emit('search', text)">
        <button class="btn btn-primary " @click="$emit('search', text)">Cerca</button>
    </div>
</template>

<script>
import { store } from '../data/store.js'
export default {
    name: 'SearchBar',
    data(){
        return{
            store,
            text: '',
        }
    },
}
</script>

<style lang="scss" scoped>
</style>