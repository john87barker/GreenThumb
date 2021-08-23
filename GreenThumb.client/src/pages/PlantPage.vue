<template>
  <div class="row home flex-grow-1 d-flex  align-items-center justify-content-center ">
    <div class="col-md-4 scroll">
      <div v-for="p in plants" :key="p.id">
        <Plant :plant="p" />
      </div>
    </div>
    <div class="col-md-8">
      <PlantDetails />
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
