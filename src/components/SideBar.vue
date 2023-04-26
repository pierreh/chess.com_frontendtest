<script setup lang="ts">
import State from './State';
</script>


<template>
    <h1>Chess.com Frontend Challenge</h1>
    <div v-show="State.clickedSquares.length > 0">Squares clicked:</div>
    <div class="container">
        <span v-for="(square, idx) in State.clickedSquares" :key="idx">{{ idx+1 }}: {{ square }}</span>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}
@media (min-width: 1024px) {
    .container {
        height: 30vw;
    }
}
@media (max-width: 1024px) {
    .container {
        height: 100vw;
    }
}
</style>