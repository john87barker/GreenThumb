<template>
  <div class="row home flex-grow-1 d-flex flex-column align-items-center justify-content-center my-5 ">
    <Plant :plant="p" />
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
    plants: {
      type: Array,
      required: true
    }
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
      plant: computed(() => AppState.plants)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
