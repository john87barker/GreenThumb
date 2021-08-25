<template>
  <div class=" m-1 card   button-to-expand  pb-1">
    <h5 class="text-center text-capitalize pt-1">
      {{ gardenPlants.plant.name }}
    </h5>
    <div class="d-flex justify-content-center pb-1">
      <img :src="gardenPlants.plant.picture" alt="" class="pic p-1  rounded ">
    </div>
    <div class="col-12 text-right pr-5 pb-1" title="Remove Plant" @click="removePlant(gardenPlants.id)">
      <button class="btn btn-outline-danger py-0 px-1">
        Remove
      </button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { plantsService } from '../services/PlantsService'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'
import { gardensService } from '../services/GardensService'
export default {
  name: 'MyPlant',
  props: {
    gardenPlants: {
      type: Object,
      required: true
    }
  },
  setup() {
    onMounted(async() => {
      try {
        // await plantsService.getAllGardenPlantsByGardenId()

      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      // gardenPlants: computed(() => AppState.gardenPlants)
    }
  }

}
</script>

<style lang="scss" scoped>
.pic{
  height: 7rem;
  width: 7rem;
  object-fit: cover;
}
</style>
