<template>
    <div class="card-poster col-2">
        <div class="card-first">
            <div class="card-front">
                <img :src="store.imageUrl + image" :alt="title" v-if="image">
                <img src="/img/logo.jpeg" alt="Logo" v-else>
            </div>
            <div class="card-behind p-2">
                <h2 class="mt-2">{{ title }}</h2>
                <div class="d-flex justify-content-between align-items-end">
                    <div class="nation">
                        <p v-if="language === 'en'">
                            <img src="/img/british-flag-12.gif" alt="british flag">
                        </p>
                        <p v-else-if="language === 'it'">
                            <img src="/img/italian-flag-9.gif" alt="italian flag">
                        </p>
                        <p v-else-if="language === 'de'">
                            <img src="/img/german-flag-3.gif" alt="german flag">
                        </p>
                        <p v-else-if="language === 'es'">
                            <img src="/img/spanish-flag-17.gif" alt="spanish flag">
                        </p>
                        <p v-else-if="language === 'fr'">
                            <img src="/img/france-flag.gif" alt="france flag">
                        </p>
                        <h5 v-else>{{ language }}</h5>
                    </div>
                    <div>
                        <i :class="{ 'fa-solid fa-star-half-stroke': votes > 0 && votes < 1, 'fa-solid fa-star': votes > 0, 'fa-regular fa-star': votes === 0 }"></i>
                        <i :class="{ 'fa-solid fa-star-half-stroke': votes > 1 && votes < 2, 'fa-solid fa-star': votes > 1, 'fa-regular fa-star': votes < 2 }"></i>
                        <i :class="{ 'fa-solid fa-star-half-stroke': votes > 2 && votes < 3, 'fa-solid fa-star': votes > 2, 'fa-regular fa-star': votes < 3 }"></i>
                        <i :class="{ 'fa-solid fa-star-half-stroke': votes > 3 && votes < 4, 'fa-solid fa-star': votes > 3, 'fa-regular fa-star': votes < 4 }"></i>
                        <i :class="{ 'fa-solid fa-star-half-stroke': votes > 4 && votes < 5, 'fa-solid fa-star': votes > 4, 'fa-regular fa-star': votes < 5 }"></i>
                        <span class="d-block"> {{ votes }}</span>
                    </div>
                </div>
                <h4 class="mt-2" v-show="this.title !== this.original_title">
                    <span class="fs-3">{{ original_title }}</span>
                </h4>
                <div class="plot text-white">
                    {{ plot }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../../data/store.js';
export default {
    name: 'CardComponent',
    props: {
        original_title: {
            type: String,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        votes: {
            type: Number,
            required: true,
        },
        language: {
            type: String,
            required: true,
        },
        plot: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            store,
        }
    }

}
</script>

<style lang="scss" scoped>
.card-poster {
    width: 300px;
    height: 450px;
    overflow: hidden;
}

.card-first {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: 1s;
}

.card-first:hover {
    cursor: pointer;
    transform: rotateY(180deg);
}

.card-front,
.card-behind {
    position: absolute;
    height: 100%;
    backface-visibility: hidden;
}

.card-front {
    height: 100%;
    width: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.card-behind {
    background: linear-gradient(315deg,
            rgb(88, 87, 87) 50%,
            rgb(63, 60, 60) 50%);
    color: white;
    transform: rotateY(180deg);
}

i {
    color: white;
}

.nation {
    width: 50px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    }
}

.plot {
    height: 100px;
    width: 100%;
    overflow-y: scroll;
}

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: white;
    border-radius: 10px;
}
</style>