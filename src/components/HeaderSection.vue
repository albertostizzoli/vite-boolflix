<template>
 <header class="d-flex justify-content-between align-items-center">
        <div class="d-flex align-items-center ">
            <img src="/img/netflix-logo.png" alt="logo">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-light" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Serie TV</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Film</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Nuovi e popolari</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">La mia lista</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-light" href="#">Sfoglia per lingua</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div class="d-flex justify-content-between align-items-center">
            <div class="input-group w-50 flex-nowrap">
                <input class="form-control" type="text" v-model="store.params.query" @keyup.enter="$emit('search', text), store.showMain = true">
            </div>
            <button class="btn btn-danger me-3" @click="$emit('search', text), store.showMain = true">Cerca</button>
            <div class="profile">
                <img :src="store.listProfiles[store.profileIndex].profilePic" :alt="store.listProfiles[store.profileIndex].descriptionPic">
                <div class="text-light text-center">
                    {{ store.listProfiles[store.profileIndex].name }}
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import {store} from '../data/store.js';
    export default {
        name: 'HeaderSection',
        data(){
            return {
                store,
                text: ''
            }
        },        
    }
</script>

<style lang="scss" scoped>
img{
    width: 100px;
    transform: translate(0, -7px);
}
.profile{
    width: 100px;
    height: 100px;
}
</style>