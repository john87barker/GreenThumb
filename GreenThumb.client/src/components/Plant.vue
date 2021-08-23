<template>
  <!-- NOTE pl-5 brings it in view but squishes the button... -->
  <div class="row  height mb-2 d-flex justify-content-end  ">
    <button class="btn btn-primary m-2 card col-md-12 button-to-expand "
            type="button"
            data-toggle="collapse"
            :data-target="'#collapse'
              +
              plant.id"
            aria-expanded="false"
            aria-controls="collapseExample"
    >
      {{ plant.name }}
      <img :src="plant.picture" alt="" class="pic">
      <div>
      </div>
      <!-- NOTE add v-if's for whether the user has logged in or not.  -->

      <div class="d-flex justify-content-between">
        <div class="d-flex justify-content-end" v-if="user.isAuthenticated">
          <button type="button" class="btn btn-outline-secondary ">
            add to my garden
          </button>
        </div>
        <div class="d-flex justify-content-start" v-else>
          <button type="button" class="btn btn-outline-secondary ">
            create an account
          </button>
        </div>
      </div>
    </button>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'Component',
  props: {
    plant: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      user: computed(() => AppState.user)
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
