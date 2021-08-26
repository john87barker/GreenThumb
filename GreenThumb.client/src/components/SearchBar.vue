<template>
  <div class="row">
    <div class="col-md-3 py-2 pl-5">
      <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <label class="btn btn-warning">
          <input type="radio" name="options" id="option1" @click="state.status='all'"> All
        </label>
        <label class="btn btn-danger">
          <input type="radio" name="options" id="option2" @click="state.status='open'"> Open
        </label>
        <label class="btn btn-secondary">
          <input type="radio" name="options" id="option3" @click="state.status='closed'"> Closed
        </label>
      </div>
    </div>
    <div class="col-md-9">
      <form class="search-bar ml-5 d-flex align-self-center">
        <input type="text" class="align-self-center form-control" id="search" v-model="state.title" placeholder="Search...">
        <button @click.prevent="search" class="ml-3 btn btn-info border action">
          <span class="feronia">Search</span>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { logger } from '../utils/Logger'
import Pop from '../utils/Notifier'
import { searchesService } from '../services/SearchesService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'SearchBar',
  setup() {
    const state = reactive({
      dropOpen: false,
      title: '',
      closedPosts: computed(() => AppState.posts.filter(p => p.closed === true)),
      openPosts: computed(() => AppState.posts.filter(p => p.closed === false)),
      status: 'all'
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
