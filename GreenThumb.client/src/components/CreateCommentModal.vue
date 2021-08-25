<template>
  <div class="create-comment-form">
    <div class="modal fade" :id="'create-comment-modal-'+ post.id" tabindex="-1" aria-labelledby="commentModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <form @submit.prevent="createComment">
          <div class="modal-content">
            <div class="modal-header text-dark">
              <h5 class="modal-title" id="commentModalLabel">
                Create Comment for {{ state.rawComment.posttitle }}
              </h5>
              <button type="button" class="btn-close btn btn-outline-danger" data-dismiss="modal" aria-label="Close" title="close">
                <i class="mdi mdi-close"></i>
              </button>
            </div>
            <div class="modal-body">
              <input
                class="form-control"
                type="text"
                v-model="state.rawComment.title"
                :id="'commenttitle-'+ post.id"
                placeholder="Comment Title..."
                required
                minlength="4"
                maxlength="50"
              >
              <br>
              <textarea
                class="form-control"
                :id="'commentbody-'+ post.id"
                v-model="state.rawComment.body"
                rows="5"
                placeholder="Tell us your thoughts!..."
                required
                minlength="4"
                maxlength="240"
              >
          </textarea>
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
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'
import $ from 'jquery'
import { commentsService } from '../services/CommentsService'

export default {
  name: 'CreateCommentModal',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const state = reactive({
      rawComment: {
        postId: props.post.id,
        posttitle: props.post.title
      }
    })
    return {
      state,
      router,
      account: computed(() => AppState.account),
      posts: computed(() => AppState.posts),
      async createComment() {
        try {
          delete state.rawComment.posttitle
          await commentsService.createComment(state.rawComment)
          state.rawComment = {
            postId: props.post.id,
            posttitle: props.post.title
          }
          Pop.toast('Comment Created', 'success')
          $('#create-comment-modal-' + props.post.id).modal('toggle')
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
