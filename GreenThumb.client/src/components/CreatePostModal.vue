<template>
  <div class="create-post-form">
    <div class="modal fade" id="create-post-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <form @submit.prevent="createPost">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Create Post
              </h5>
              <button type="button" class="btn-close btn btn-outline-danger" data-dismiss="modal" aria-label="Close" title="close">
                <i class="mdi mdi-close"></i>
              </button>
            </div>
            <div class="modal-body">
              <input
                class="form-control"
                type="text"
                v-model="state.rawPost.title"
                id="title"
                placeholder="Post Title..."
                required
                minlength="4"
                maxlength="50"
              >
              <br>
              <textarea
                class="form-control"
                id="body"
                v-model="state.rawPost.body"
                rows="5"
                placeholder="Tell us what is happening in your garden!..."
                required
                minlength="4"
                maxlength="240"
              >
          </textarea>
              <br>
              <input
                class="form-control"
                type="text"
                v-model="state.rawPost.media"
                id="media"
                placeholder="Media URL..."
                required
                minlength="4"
              >

              <div class="modal-footer">
                <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#createPost">
                  Submit Post
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from '@vue/reactivity'
import Pop from '../utils/Notifier'
import { postsService } from '../services/PostsService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'
import $ from 'jquery'
export default {
  name: 'CreatePostModal',
  setup() {
    const router = useRouter()
    const state = reactive({
      rawPost: {}
    })
    return {
      state,
      router,
      account: computed(() => AppState.account),
      posts: computed(() => AppState.posts),
      async createPost() {
        try {
          await postsService.createPost(state.rawPost)
          state.rawPost = {}
          Pop.toast('Post Created', 'success')
          $('#create-post-modal').modal('toggle')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
</style>
