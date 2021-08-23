<template>
  <div class="row flex-grow-1 d-flex justify-content-center">
    <div class="col-md-4 scroll ">
      <div v-for="p in plants" :key="p.id">
        <Plant :plant="p" />
      </div>
    </div>
    <div class="col-md-8" v-for="activePlant in plants" :key="activePlant.id">
      <PlantDetails :active-plant="activePlant" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { plantsService } from '../services/PlantsService'

export default {
  name: 'Component',
  props: {
    // plants: {
    //   type: Array,
    //   required: true
    // }
  },
  setup() {
    const state = reactive()
    onMounted(async() => {
      try {
        await plantsService.getAllPlants()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      state,
      plants: computed(() => AppState.plants)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.scroll{
  overflow-y: auto;
  height: 100vh;
}
</style>
