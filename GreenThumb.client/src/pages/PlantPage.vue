<template>
  <div class="container-fluid row flex-grow-1 d-flex justify-content-center px-5 m-0">
    <div class="row mx-5">
      <div class="col-md-3  scroll ">
        <div v-for="p in plants" :key="p.id">
          <Plant :plant="p" />
        </div>
      </div>
      <div class="col-md-9">
        <PlantDetails :active-plant="activePlant" />
      </div>
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
    onMounted(async() => {
      try {
        await plantsService.getAllPlants()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {

      plants: computed(() => AppState.plants),
      activePlant: computed(() => AppState.activePlant)

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.scroll{
  overflow-y: auto;
  height: 100vh;
  width: 50vw;
}
.action {
  cursor: pointer;
}
</style>
