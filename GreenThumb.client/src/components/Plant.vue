<template>
  <!-- NOTE pl-5 brings it in view but squishes the button... -->
  <div class="row  height mb-2 d-flex justify-content-end  " @click="setActivePlant">
    <div class="col-md-12">
      <div class=" m-2 card  button-to-expand ">
        <h5 class="text-center text-capitalize">
          {{ plant.name }}
        </h5>
        <img :src="plant.picture" alt="" class="pic p-1">
        <div>
        </div>
        <!-- NOTE add v-if's for whether the user has logged in or not.  -->

        <div class="d-flex justify-content-center p-1">
          <div class="d-flex justify-content-end" v-if="user.isAuthenticated">
            <button type="button" class="btn btn-outline-secondary ">
              add to my garden
            </button>
          </div>
          <div class="d-flex justify-content-start" v-else>
            <button type="button" class="btn btn-outline-secondary ">
              start a garden
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { plantsService } from '../services/PlantsService'
export default {
  name: 'Component',
  props: {
    plant: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      user: computed(() => AppState.user),
      async setActivePlant() {
        AppState.activePlant = props.plant
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pic{
  max-height: 10rem;
  max-width: 10rem;
}
.height{
  width: 15vw;

}
// .button-to-expand{
//   width: 100vw;
// }
</style>
