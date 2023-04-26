<script setup lang="ts">
import State from './State';
</script>


<template>
    <h1>Chess.com Frontend Challenge</h1>
    <div v-show="State.clickedSquares.length > 0">Squares clicked:</div>
    <div v-for="(square, idx) in State.clickedSquares" :key="idx">{{ idx }}: {{ square }}</div>
</template>

<style scoped>

</style>