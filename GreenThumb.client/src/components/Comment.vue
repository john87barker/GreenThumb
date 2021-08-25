<template>
  <div class="col-md-12 text-light border-left border-top border-light p-3 mb-3 rounded shadow">
    <div class="row">
      <div class="col-md-3 text-center">
        <p><img :src="comment.creator.picture" class="rounded-circle" width="35"></p>
        <h6>{{ comment.creator.name }}</h6>
      </div>
      <div class="col-md-7">
        <h5>{{ comment.title }}</h5>
        <p> {{ comment.body }} </p>
      </div>
      <div class="col-md-2">
        <div class="row">
          <div class="col-4 offset-3" title="Edit Comment">
            <button class="btn btn-warning" :data-target="'#edit-comment-modal-'+comment.id" data-toggle="modal">
              <i class="mdi mdi-pencil"></i>
            </button>
            <EditCommentModal :comment="comment" />
          </div>
          <div class="col-4"
               title="Close Comment"
               @click="closeComment(comment)"
          >
            <button class="btn btn-danger">
              <i class="mdi mdi-close"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { commentsService } from '../services/CommentsService'
import Pop from '../utils/Notifier'
import Swal from 'sweetalert2'

export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      comments: computed(() => AppState.comments[props.post.id] || []),
      user: computed(() => AppState.account),
      async closeComment(comment) {
        try {
          await Swal.fire({
            title: 'Are you sure you want to close out this comment?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085D6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, close it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              await commentsService.closeComment(comment)
              Swal.fire(
                'Closed!',
                'Your comment has been closed.',
                'success'
              )
            }
          })
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
