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
          <div class="col-3 offset-6 py-2 p-2">
            <i class="mdi mdi-pencil"></i>
          </div>
          <div class="col-3 py-2 p-1">
            <i class="mdi mdi-close"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Comment',
  props: {
    comment: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
