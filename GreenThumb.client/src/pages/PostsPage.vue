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
          <button type="button" class="btn btn-secondary shadow" data-target="#create-post-modal" data-toggle="modal">
            + New Post
          </button>
        </span>
      </div>
    </div>
    <div class="row m-0">
      <div class="col-md-12">
        <div class="row">
          <div class="col-md-3 py-2 pl-5">
            <div class="btn-group btn-group-toggle shadow" data-toggle="buttons">
              <label class="btn btn-outline-warning">
                <input type="radio" name="options" id="option1" @click="state.status='all'"> All
              </label>
              <label class="btn btn-outline-danger">
                <input type="radio" name="options" id="option2" @click="state.status='open'"> Open
              </label>
              <label class="btn btn-outline-secondary">
                <input type="radio" name="options" id="option3" @click="state.status='closed'"> Closed
              </label>
            </div>
          </div>
          <div class="col-md-9">
            <SearchBar />
          </div>
        </div>
      </div>
    </div>
    <div class="row m-0 p-3" v-if="state.status==='all'">
      <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>
    <div class="row m-0 p-3" v-else-if="state.status==='open'">
      <Post v-for="p in state.openPosts" :key="p.id" :post="p" />
    </div>
    <div class="row m-0 p-3" v-else-if="state.status==='closed'">
      <Post v-for="p in state.closedPosts" :key="p.id" :post="p" />
    </div>
  </div>
  <CreatePostModal />
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
import SearchBar from '../components/SearchBar.vue'

export default {
  name: 'PostsPage',
  setup() {
    const state = reactive({
      status: 'all',
      closedPosts: computed(() => AppState.posts.filter(p => p.closed === true)),
      openPosts: computed(() => AppState.posts.filter(p => p.closed === false))
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
      account: computed(() => AppState.account)

    }
  },
  components: {
    SearchBar
  }
}
</script>

<style lang="scss" scoped>
.seeds{
  font-size: 140px;
}
</style>
