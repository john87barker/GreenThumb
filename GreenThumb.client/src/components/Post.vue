<template>
  <div class="col-md-12 text-light border-left border-top border-light p-3 mb-3 rounded shadow">
    <div class="row">
      <div class="col-md-3 d-none-sm border-right d-flex flex-column">
        <div class="text-center">
          <img :src="post.creator.picture" class="rounded-circle w-25">
        </div>
        <h5 class="text-center mt-1">
          {{ post.creator.name }}
        </h5>
        <div class="mt-auto">
          Posted: {{ createdDate }}
        </div>
        <div class="row p-1">
          <div class="col-6" v-if="post.closed === false" title="Create Comment">
            <CreateCommentModal :post="post" />
          </div>
          <div class="col-6" v-if="post.closed === false && user.id === post.creatorId" title="Edit Post">
            <button class="btn btn-warning" :data-target="'#edit-post-modal-'+post.id" data-toggle="modal">
              <i class="mdi mdi-pencil mdi-24px"></i>
            </button>
            <EditPostModal :post="post" />
          </div>
        </div>
      </div>
      <div class="col-md-7 d-flex flex-column px-2 p-1">
        <h3>{{ post.title }}</h3>
        <div v-if="post.closed">
          Post Status: <span class="text-danger">Closed</span>
        </div>
        <div v-if="!post.closed">
          Post Status: <span class="text-success">Open</span>
        </div>
        <h5 class="mt-1">
          {{ post.body }}
        </h5>

        <div class="ml-1 mt-auto d-flex">
          <button class="btn btn-warning" v-if="!post.closed" :data-target="'#create-comment-modal-'+ post.id" data-toggle="modal">
            <i class="mdi mdi-comment-multiple mdi-24px"></i>
          </button>
          <button class="ml-auto btn btn-warning" v-if="!state.showComments && comments.length !== 0" @click="state.showComments=true">
            <i class="mdi mdi-arrow-down-thick mdi-24px"></i>
            <b> Show Comments </b>
            <i class="mdi mdi-arrow-down-thick mdi-24px"></i>
          </button>
          <button class="ml-auto btn btn-warning" v-if="state.showComments && comments.length !== 0" @click="state.showComments=false">
            <i class="mdi mdi-arrow-up-thick mdi-24px"></i>
            <b> Hide Comments </b>
            <i class="mdi mdi-arrow-up-thick mdi-24px"></i>
          </button>
        </div>
      </div>
      <div class="col-md-2">
        <div class="row">
          <div class="col-12 text-right pr-5 pb-1" v-if="post.closed === false && user.id === post.creatorId" title="Close Post" @click="closePost(post)">
            <button class="btn btn-danger">
              <i class="mdi mdi-close mdi-24px"></i>
            </button>
          </div>
        </div>
        <div class="row w-100 d-flex align-content-right">
          <div class="col-md-12" v-if="post.media">
            <div>
              <img :src="post.media" :alt="post.creator.name" class="img-fit">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-10 offset-1 mb-5 border-bottom border-primary">
    <div class="row" v-if="state.showComments === true">
      <Comment v-for="c in comments" :key="c.id" :comment="c" :post="post" />
    </div>
  </div>
</template>

<script>
import { computed, reactive, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { commentsService } from '../services/CommentsService'
import Pop from '../utils/Notifier'
import Swal from 'sweetalert2'
import { postsService } from '../services/PostsService'

export default {
  name: 'Post',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    watchEffect(async() => {
      try {
        await commentsService.getCommentsByPostId(props.post.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    const state = reactive({
      showComments: false
    })
    watchEffect(() => props.post)
    return {
      comments: computed(() => AppState.comments[props.post.id] || []),
      user: computed(() => AppState.account),
      posts: computed(() => AppState.posts),
      state,

      async closePost(post) {
        try {
          await Swal.fire({
            title: 'Are you sure you want to close out this post?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085D6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, close it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              await postsService.closePost(post)
              Swal.fire(
                'Closed!',
                'Your post has been closed.',
                'success'
              )
            }
          })
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },

      createdDate: computed(() => {
        const d = new Date(props.post.createdAt)
        return new Intl.DateTimeFormat('en-US').format(d)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.img-fit{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
