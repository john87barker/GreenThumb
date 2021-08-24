<template>
  <aside>
    <SideBar />
    <main class="bg view-scroll pl-5">
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
.bg{

  // background-color: grey;
background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to left, #0f9b0f, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to left, #0f9b0f, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

height: 100vh;
}
.view-scroll {
  max-height: 100vh;
  overflow-y: auto;
}
</style>
