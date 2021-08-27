<template>
  <div class="col-md-12 text-light border-left border-top border-light p-3 mb-3 rounded shadow">
    <div class="row">
      <div class="col-md-3 text-center">
        <router-link :to="{ name: 'MyGarden', params: {id: post.creatorId } }" @click.stop="">
          <p><img :src="comment.creator.picture" class="rounded-circle" width="35"></p>
          <h6>{{ comment.creator.name }}</h6>
        </router-link>
        <p>Commented: {{ createdDate }}</p>
      </div>
      <div class="col-md-7">
        <!-- <h5>{{ comment.postId }}</h5>
        <h5>{{ post.id }}</h5>
        <h5>{{ post.closed }}</h5> -->
        <h5>{{ comment.title }}</h5>
        <p> {{ comment.body }} </p>
      </div>
      <div class="col-md-2">
        <div class="row" v-if="post.closed === false && user.id === comment.creatorId">
          <div class="col-4 offset-3" title="Edit Comment">
            <button class="btn btn-warning" :data-target="'#edit-comment-modal-'+comment.id" data-toggle="modal">
              <i class="mdi mdi-pencil"></i>
            </button>
            <EditCommentModal :comment="comment" />
          </div>
          <div class="col-4"
               title="Close Comment"
               @click="closeComment(comment, comment.postId)"
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
  postInfo: {},
  props: {
    comment: {
      type: Object,
      required: true
    },
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      comments: computed(() => AppState.comments[props.comment.postId] || []),
      user: computed(() => AppState.account),
      async closeComment(comment, postId) {
        try {
          await Swal.fire({
            title: 'Are you sure you want to delete this comment?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085D6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              await commentsService.closeComment(comment, postId)
              Swal.fire(
                'Deleted!',
                'Your comment has been deleted.',
                'success'
              )
            }
          })
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },

      createdDate: computed(() => {
        const d = new Date(props.comment.createdAt)
        return new Intl.DateTimeFormat('en-US').format(d)
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
