<template>
  <div class="container-fluid">
    <div class="row m-0">
      <div class="col-2"></div>
      <div class="col-md-8 text-center p-2">
        <h1 class="text-light">
          <span class="seeds">V</span>eggie &nbsp;&nbsp;&nbsp;&nbsp;<span class="seeds">T</span>ells
        </h1>
      </div>
      <div class="col-2 py-3">
        <span v-if="account.id">
          <button type="button" class="btn btn-primary" data-target="#create-post-modal" data-toggle="modal">
            + New Post
          </button>
        </span>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-md-8 offset-2">
        <form class="ml-5 d-flex align-self-center">
          <input type="text" class="align-self-center form-control" id="search" v-model="state.input" placeholder="Search...">
          <button @click.prevent="search" class="ml-3 btn btn-info border action">
            <span>Get those Posts</span>
          </button>
        </form>
      </div>
    </div>
    <div class="row m-0 p-3">
      <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>
  <CreatePostModal />
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
import { searchesService } from '../services/SearchesService'
import { logger } from '../utils/Logger'

export default {
  name: 'PostsPage',
  setup() {
    const state = reactive({
      dropOpen: false,
      input: ''
    })
    onMounted(async() => {
      try {
        await postsService.getAllPosts()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      state,
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account),
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
  components: {
    // CreatePostModal
  }
}
</script>

<style lang="scss" scoped>
.seeds{
  font-size: 140px;
}
</style>
