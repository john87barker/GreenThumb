<template>
  <div class="edit-post-form">
    <div class="modal fade" :id="'edit-post-modal-'+ post.id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <form @submit.prevent="editPost">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="exampleModalLabel">
                Edit Post
              </h4>
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
                :placeholder="state.rawPost.title"
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
                :placeholder="state.rawPost.body"
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
                :placeholder="state.rawPost.media"
                minlength="4"
              >

              <div class="modal-footer">
                <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#editPost">
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
import { computed, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'
import $ from 'jquery'
export default {
  name: 'EditPostModal',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const state = reactive({
      rawPost: {
        id: props.post.id,
        title: props.post.title,
        body: props.post.body,
        media: props.post.media
      }
    })
    // watchEffect(() => state.rawPost)
    // try {
    //   await postsService.getPostById(props.post.id)
    // } catch (error) {
    //   Pop.toast(error, 'error')
    // }
    // })
    return {
      state,
      router,
      account: computed(() => AppState.account),
      rawPost: computed(() => state.props.post),

      async editPost() {
        try {
          await postsService.editPost(state.rawPost)
          state.rawPost = {
            id: props.post.id,
            title: props.post.title,
            body: props.post.body,
            media: props.post.media
          }
          Pop.toast('Post editd', 'success')
          $('#edit-post-modal').modal('toggle')
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
