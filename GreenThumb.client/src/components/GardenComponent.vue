<template>
  <div class="row justify-content-center mt-5">
    <div class="col-11 bg-info rounded shadow">
      <div class="row">
        <h1 class="col-12 text-center py-3">
          <em>
            {{ garden.name }}
          </em>
        </h1>
        <div class="col-md-12 d-flex flex-row mb-2">
          <div class="col-md-12 text-break d-flex justify-content-around">
            <div>{{ garden.body }}</div>
            <div>zip code: {{ garden.zipCode }}</div>
          </div>
        </div>
        <div class="row">
        </div>
        <!-- //NOTE v-if this so that the following shows if they already have a garden... -->
        <div class="col-md-12 d-flex ">
          <div class="row">
            <div class="col-md-3 px-2" v-for="p in gardenPlants" :key="p.id">
              <MyPlant :garden-plants="p" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CreateGardenModal />
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'Component',
  props: {
    garden: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      gardenPlants: computed(() => AppState.gardenPlants)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
