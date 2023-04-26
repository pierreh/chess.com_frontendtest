<script lang="ts">
import ChessSquare from './ChessSquare.vue';

export default {
    data() {
        return {
            even: false
        }
    },
    props: {
        rank: { type: Number, required: true }
    },
    components: {
        ChessSquare
    },
    created() {
        this.even = this.rank%2 == 0;
    }
}
</script>


<template>
    <div class="rank">
        <ChessSquare :rank="rank" file="a" :dark="even"/>
        <ChessSquare :rank="rank" file="b" :dark="!even"/>
        <ChessSquare :rank="rank" file="c" :dark="even"/>
        <ChessSquare :rank="rank" file="d" :dark="!even"/>
        <ChessSquare :rank="rank" file="e" :dark="even"/>
        <ChessSquare :rank="rank" file="f" :dark="!even"/>
        <ChessSquare :rank="rank" file="g" :dark="even"/>
        <ChessSquare :rank="rank" file="h" :dark="!even"/>
    </div>
</template>

<style scoped>
.rank {
    display: flex;
    flex-wrap: nowrap;
    flex-grow: 1;
}
</style>