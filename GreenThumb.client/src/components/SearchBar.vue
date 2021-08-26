<template>
  <form class="search-bar ml-5 d-flex align-self-center">
    <input type="text" class="align-self-center form-control" id="search" v-model="state.input" placeholder="Search...">
    <button @click.prevent="search" class="ml-3 btn btn-info border action">
      <span class="feronia">Search</span>
    </button>
  </form>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { logger } from '../utils/Logger'
import Pop from '../utils/Notifier'
import { searchesService } from '../services/SearchesService'
export default {
  name: 'SearchBar',
  setup() {
    const state = reactive({
      dropOpen: false,
      input: ''
    })
    return {
      state,
      async search() {
        try {
          logger.log('in the posts page')
          logger.log(state.input)
          await searchesService.search(state.input)
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
