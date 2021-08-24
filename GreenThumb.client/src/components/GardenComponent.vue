<template>
  <div class="row justify-content-center mt-5">
    <div class="col-11 bg-grey rounded">
      <div class="row">
        <h1 class="col-12 text-center">
          My Garden
        </h1>
      </div>
      <div class="row">
      </div>
      <!-- //NOTE v-if this so that the following shows if they already have a garden... -->
      <div class="row d-flex flex-row">
        <div class="col-md-3 text-break">
          <p>{{ garden.name }}</p>
          <p>{{ garden.body }}</p>
          <p>zip code: {{ garden.zipCode }}</p>
        </div>
        <div class="col-md-9 d-flex justify-content-between">
          <p class="rounded">
            <button type="button" class="btn btn-primary">
              +
            </button>
          </p>
          <p class="rounded">
            <button type="button" class="btn btn-primary">
              +
            </button>
          </p>
          <p class="rounded">
            <button type="button" class="btn btn-primary">
              +
            </button>
          </p>
          <p class="rounded">
            <button type="button" class="btn btn-primary">
              +
            </button>
          </p>
        </div>
      </div>
    </div>
  </div>
  <CreateGardenModal />
</template>

<script>
export default {
  name: 'Component',
  props: {
    garden: {
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
