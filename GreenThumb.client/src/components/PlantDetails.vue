<template>
  <h1>
    plant details
  </h1>
  <!-- <div class="collapse height col-md-6" :id="'collapse' + plant.id">
    <div class="card card-body">
      <div class="col-md-7 card">
        <div class="row">
          <h1 class="col-md-12 text-center">
            {{ plant.name }}
          </h1>
          <hr>
          <div class="d-flex justify-content-between pb-3">
            <div class="col-md-6 d-flex justify-content-center ">
              <img :src="plant.picture" class="pic ">
            </div>
            <div class="col-md-6 text-left d-flex justify-content-center">
              {{ plant.body }}
            </div>
          </div>

          <div class="col-md-6 text-right pr-5">
            <p class="my-0">
              {{ plant.family }}
            </p>
            <p class="my-0">
              {{ plant.sunReq }}
            </p>
            <p class="my-0">
              {{ plant.season }}
            </p>
            <p class="my-0">
              {{ plant.frost }}
            </p>
          </div>
          <div class="col-md-6">
            <p class="my-0">
              {{ plant.hZone }}
            </p>
            <p class="my-0">
              {{ plant.daysToMaturity }}
            </p>
            <p class="my-0">
              Horizontal Space:{{ plant.sqFt }} sq. ft.
            </p>
            <p class="my-0">
              {{ plant.matureHeight }}
            </p>
          </div>
          <div class="col-md-12 py-3">
            <p>  Harvest info: </p>
            <p> {{ plant.harvest }}</p> -->
  <!-- NOTE add v-if's for whether the user has logged in or not.  -->
  <!-- <div class="d-flex justify-content-between">
              <div class="d-flex justify-content-end">
                <button type="button" class="btn btn-outline-primary ">
                  add to my garden
                </button>
              </div>
              <div class="d-flex justify-content-start">
                <button type="button" class="btn btn-outline-primary ">
                  create an account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import { reactive } from '@vue/reactivity'
export default {
  name: 'Component',
  setup() {
    const state = reactive
    return {
      state
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
