<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 p-0">
        <SideBar />
      </div>
      <div class="col-md-10 p-0">
        <main class="bg view-scroll">
          <router-view />
        </main>
      </div>
    </div>
  </div>
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
}
.view-scroll {
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: auto;
}
@font-face {
  font-family: gardening;
  src: url('./assets/fonts/gardening.ttf');
}
.garden {
  font-family: gardening;
}
@font-face {
  font-family: gardening1;
  src: url('./assets/fonts/feronia.ttf');
}
.feronia {
  font-family: gardening1;
  font-size: 25px;
}
@font-face {
  font-family: gardening2;
  src: url('./assets/fonts/kr-seeds.ttf');
}
.seeds {
  font-family: gardening2;
  }
.action {
  cursor: pointer;
}
::-webkit-scrollbar {
  margin-right: 10px;
    width: 15px;
    height: 2px;
}
/* Track */
// ::-webkit-scrollbar-track {
//     -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
//     box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
//     -webkit-border-radius: 6px;
//     border-radius: 6px;
// }
/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 20px;
    border-radius: 20px;
    background: #000000;
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
    box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
}
::-webkit-scrollbar-thumb:window-inactive {
    background: #0f9b0f;
}
</style>
