<template>
  <div class="col-md-12 text-light border-left border-top border-light p-3 mb-3 rounded shadow">
    <div class="row">
      <div class="col-md-3 text-center">
        <p><img :src="post.creator.picture" class="rounded-circle w-25"></p>
        <h5>{{ post.creator.name }}</h5>
      </div>
      <div class="col-md-7">
        <h5>{{ post.title }}</h5>
        <p> {{ post.body }} </p>
        <p> {{ createdDate }}</p>
      </div>
      <div class="col-md-2">
        <div class="row">
          // TODO [epic="CJ"] uncomment below - it is part of closing the post.
          <!-- <div class="col-12 text-right pr-5 pb-1" v-if="post.closed === false && account.id === post.creatorId" title="Close Post" @click="closePost(post)">
            <i class="mdi mdi-close mdi-24px"></i>
          </div> -->
        </div>
        <div class="row w-100 d-flex align-content-right">
          <div class="col-md-12">
            <p>
              <img :src="post.media" :alt="post.creator.name" class="img-fit">
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-10 offset-1 mb-5 border-bottom border-primary">
    <div class="row">
      <Comment v-for="c in comments" :key="c.id" :comment="c" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watchEffect } from '@vue/runtime-core'
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

    return {
      comments: computed(() => AppState.comments[props.post.id] || []),
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
      }


      createdDate: computed(() => {
        const d = new Date(props.post.createdAt)
        return new Intl.DateTimeFormat('en-US').format(d)
      })

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.img-fit{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
