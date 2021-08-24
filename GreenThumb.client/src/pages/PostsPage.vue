<template>
  <div class="container-fluid">
    <div class="row m-0">
      <div class="col-2"></div>
      <div class="col-md-8 text-center p-2">
        <h1 class="text-light">
          VeggieTells
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
    <div class="row m-0 p-3">
      <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>
  <CreatePostModal />
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
// import CreatePostModal from '../components/CreatePostModal'
export default {
  name: 'PostsPage',
  setup() {
    onMounted(async() => {
      try {
        await postsService.getAllPosts()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account)
    }
  },
  components: {
    // CreatePostModal
  }
}
</script>

<style lang="scss" scoped>

</style>
