<template>
  <div class="container-fluid">
    <div class="row m-0">
      <div class="col-md-12 text-center p-2">
        <h1 class="text-light">
          VeggieTells
        </h1>
      </div>
    </div>
    <div class="row m-0 p-3">
      <Post v-for="p in posts" :key="p.id" :post="p" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
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
      posts: computed(() => AppState.posts)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
