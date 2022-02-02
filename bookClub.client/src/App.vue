<template>
  <header>
    <Navbar />
  </header>
  <main class="bg-black">
    <router-view />
  </main>
  <footer>
    <div class="bg-black text-light text-center p-4"></div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
