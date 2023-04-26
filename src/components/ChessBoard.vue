<script setup lang="ts">
import ChessRank from './ChessRank.vue';
</script>


<template>
    <div class="board">
        <ChessRank v-for="row in 8" :key="row" :rank="9-row"/>
    </div>
</template>

<style scoped>
.board {
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    display: flex;
    flex-direction: column;
}
</style>