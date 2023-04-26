<script setup lang="ts">
import ChessBoard from './components/ChessBoard.vue'
import SideBar from './components/SideBar.vue'

</script>

<template>
  <main>
    <ChessBoard />
  </main>

  <div class="sidebar">
    <SideBar />
  </div>
</template>

<style scoped>
main {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  main {
    /* display: flex;
    place-items: center; */
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .sidebar {
    width: 50vw;
  }

}
</style>
