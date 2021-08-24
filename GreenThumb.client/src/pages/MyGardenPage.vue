<template>
  <div class="container-fluid MyGardenPage">
    <div class="row justify-content-center mt-5">
      <div class="col-9 shadow rounded bg-secondary">
        <div class="d-flex  justify-content-center p-1">
          <img :src="user.picture" alt="account pic" class="rounded-circle pic">
        </div>
        <div class="d-flex justify-content-around p-1">
          <h5>{{ user.name }}</h5>
          <h5>{{ user.email }}</h5>
        </div>
      </div>
    </div>
    <div class="row justify-content-center mt-5">
      <div class="col-11 bg-grey">
        <div class="row">
          <h1 class="col-12 text-center">
            My Garden
          </h1>
        </div>
        <div class="row">
          <div class="d-flex flex-row">
            <div class="col-md-3">
              <p>Zip Code</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum corrupti aut quod corporis dolor delectus.</p>
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
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'MyGardenPage',
  setup() {
    return {
      user: computed(() => AppState.user)

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pic {
  height: 5rem;
}
</style>
