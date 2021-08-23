<template>
  <div class="row">
    <p class="m-0">
      <button class="btn btn-primary m-2 d-flex col-md-6 button-to-expand"
              type="button"
              data-toggle="collapse"
              :data-target="'#collapse'
                +
                plant.id"
              aria-expanded="false"
              aria-controls="collapseExample"
      >
        <img :src="plant.picture" alt="" class="pic">
        <div>
          {{ plant.name }}
        </div>
        <!-- NOTE add v-if's for whether the user has logged in or not.  -->
        <div class="d-flex justify-content-between">
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-outline-secondary ">
              add to my garden
            </button>
          </div>
          <div class="d-flex justify-content-start">
            <button type="button" class="btn btn-outline-secondary ">
              create an account
            </button>
          </div>
        </div>
      </button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Component',
  props: {
    plant: {
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
.pic{
  max-height: 10rem;
}
.height{
  width: 50vw;
  height: 30vh;
}
.button-to-expand{
  width: 40vw;
}
</style>
