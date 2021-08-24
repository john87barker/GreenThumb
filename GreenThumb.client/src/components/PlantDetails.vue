<template>
  <div class="row justify-content-center mt-3 mb-3 ">
    <h1 class="col-md-12" v-if="!plant.name">
      plant details
    </h1>
    <div class="col-md-10 card d-flex view-scroll" v-else>
      <div class="row">
        <h1 class="col-md-12 text-center text-capitalize pb-1">
          <em>
            {{ plant.name }}</em>
        </h1>

        <div class="d-flex justify-content-between pb-3">
          <div class="col-md-6 d-flex justify-content-center ">
            <img :src="plant.picture" class="pic ">
          </div>
          <div class="col-md-6 pr-5 d-flex justify-content-center text-justify ">
            {{ plant.body }}
          </div>
        </div>

        <div class="col-md-6 text-left pl-5">
          <p class="my-0 text-capitalize">
            <em>
              Family: </em>{{ plant.family }}
          </p>
          <p class="my-0">
            <em>
              Sun Requirements:</em>  {{ plant.sunReq }}
          </p>
          <p class="my-0">
            <em>
              Ideal Growing Season:  </em>{{ plant.season }}
          </p>
          <p class="my-0">
            <em>
              Cold Hardiness: </em> {{ plant.frost }}
          </p>
        </div>
        <div class="col-md-6">
          <p class="my-0">
            <em>Hardiness Zones: </em>{{ plant.hZone }}
          </p>
          <p class="my-0">
            <em>Days to Maturity: </em> {{ plant.daysToMaturity }}
          </p>
          <p class="my-0">
            <em> Horizontal Space:</em>{{ plant.sqFt }} sq. ft.
          </p>
          <p class="my-0">
            <em> Mature Plant Height:</em> {{ plant.matureHeight }}
          </p>
        </div>
        <br>
        <div class="col-md-12 pl-5 text-justify pr-5">
          <p>  Harvest info: </p>
          <p> {{ plant.harvest }}</p>

          <div class="d-flex justify-content-between pb-3">
            <div class="d-flex justify-content-end " v-if="user.isAuthenticated">
              <button type="button" class="btn btn-outline-primary ">
                Add to my Garden
              </button>
            </div>
            <div class="d-flex justify-content-start" v-else>
              <button type="button" class="btn btn-outline-primary ">
                Start a Garden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { computed, watchEffect } from '@vue/runtime-core'
import { plantsService } from '../services/PlantsService'
import Pop from '../utils/Notifier'
export default {
  name: 'Component',
  // props: {
  //   activePlant: {
  //     type: Object,
  //     required: true
  //   }
  // },
  setup() {
    // const state = reactive()
    // watchEffect(async() => {
    //   try {
    //     await plantsService.getPlantById(props.activePlant.id)
    //   } catch (error) {
    //     Pop.toast(error, 'error')
    //   }
    // })
    return {
      // state,
      plant: computed(() => AppState.activePlant),
      user: computed(() => AppState.user)
      // activePlant: computed(() => AppState.activePlant)

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pic{
  height: 15rem;
  width: 15rem;
  border: 5px groove grey;
  object-fit: cover;

}
.view-scroll {
  max-height: 90vh;
  // max-width: 95vh;
  overflow-y: auto;
  overflow-x: hidden !important;
}
</style>
