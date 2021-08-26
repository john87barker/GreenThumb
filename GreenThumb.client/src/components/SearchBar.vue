<template>
  <form class="search-bar d-flex align-self-center">
    <input type="text" class="align-self-center form-control" id="search" v-model="state.title" placeholder="Search...">
    <button @click="search" class="ml-3 btn btn-info border action">
      <span class="feronia">Search</span>
    </button>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Pop from '../utils/Notifier'
import { searchesService } from '../services/SearchesService'

export default {
  name: 'SearchBar',
  setup() {
    const state = reactive({
      dropOpen: false,
      title: ''
    })
    return {
      state,
      async search() {
        try {
          await searchesService.search(state.title)
        } catch (e) {
          Pop.toast(e, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.seeds{
  font-size: 40px;
}
</style>
