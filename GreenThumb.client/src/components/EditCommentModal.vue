<template>
  <div class="edit-comment-form">
    <div class="modal fade" :id="'edit-comment-modal-'+ comment.id" tabindex="-1" aria-labelledby="editocmmentModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <form @submit.prevent="editComment">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title text-dark" id="editCommentModalLabel">
                Edit Comment
              </h4>
              <button type="button" class="btn-close btn btn-outline-danger" data-dismiss="modal" aria-label="Close" title="close">
                <i class="mdi mdi-close"></i>
              </button>
            </div>
            <div class="modal-body">
              <input
                class="form-control"
                type="text"
                v-model="state.rawComment.title"
                :id="'editcommenttitle-'+ comment.id"
                :placeholder="state.rawComment.title"
                required
                minlength="4"
                maxlength="50"
              >
              <br>
              <textarea
                class="form-control"
                :id="'editcommentbody-'+ comment.id"
                v-model="state.rawComment.body"
                rows="5"
                :placeholder="state.rawComment.body"
                required
                minlength="4"
                maxlength="240"
              >
          </textarea>
              <div class="modal-footer">
                <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#editComment">
                  Submit Comment
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
import { commentsService } from '../services/CommentsService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'
import $ from 'jquery'
export default {
  name: 'EditCommentModal',
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter()
    const state = reactive({
      rawComment: {
        id: props.comment.id,
        title: props.comment.title,
        body: props.comment.body,
        postId: props.comment.postId
      }
    })
    return {
      state,
      router,
      account: computed(() => AppState.account),
      rawComment: computed(() => state.props.comment),
      async editComment() {
        try {
          debugger
          await commentsService.editComment(state.rawComment)
          state.rawComment = {
            id: props.comment.id,
            title: props.comment.title,
            body: props.comment.body,
            postId: props.comment.postId
          }
          Pop.toast('Comment edited', 'success')
          $('#edit-comment-modal-' + props.comment.id).modal('toggle')
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
