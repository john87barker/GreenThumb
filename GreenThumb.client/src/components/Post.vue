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
      </div>
      <div class="col-md-2">
        <div class="row">
          <div class="col-12 text-right pr-5 pb-1">
            <h6>X</h6>
          </div>
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
import { logger } from '../utils/Logger'
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
        logger.log(props.post.id + ' in post.vue')
        await commentsService.getCommentsByPostId(props.post.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })

    // onMounted(async() => {
    //   try {
    //     logger.log('onmounted comments in post.vue')
    //     await commentsService.getCommentsByPostId(props.post.id)
    //   } catch (error) {
    //     Pop.toast(error, 'error')
    //   }
    // })
    return {
      comments: computed(() => AppState.comments[props.post.id] || [])
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
