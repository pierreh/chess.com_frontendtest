<script setup lang="ts">
import ChessRank from './ChessRank.vue';
</script>


<template>
    <div class="board">
        <ChessRank v-for="rank in 8" :key="rank" :rank="9-rank"/>
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