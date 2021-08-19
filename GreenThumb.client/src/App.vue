<template>
  <aside>
    <SideBar />
    <main class="img">
      <router-view />
    </main>
  </aside>
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
.img{
  background-image: url("https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80");
  opacity: abs($number: .5);
  background-size: cover;
  height: 100vh;
  z-index: -1;
  // max-width: 100vw;
}
</style>
