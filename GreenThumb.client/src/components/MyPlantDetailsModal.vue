<template>
  <div class="my-plant-details-modal text-dark " v-if="plant.body">
    <div class="modal fade "
         id="my-plant-details-modal"
         tabindex="-1"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
    >
      <div class="modal-dialog modal-xl z">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class=" text-center text-capitalize pb-1">
              <em>
                {{ plant.name }}</em>
            </h1>
            <button type="button" class="btn-close btn btn-outline-danger " data-dismiss="modal" aria-label="Close" title="close">
              <i class="mdi mdi-close"></i>
            </button>
          </div>
          <div class="modal-body row">
            <div class="col-md-12 card d-flex ">
              <div class="row">
                <div class="d-flex justify-content-between py-3">
                  <div class="col-md-6 d-flex justify-content-center ">
                    <img :src="plant.picture" class="pic ">
                  </div>
                  <div class="col-md-6 pr-5 d-flex justify-content-center text-justify pt-5">
                    {{ plant.body }}
                  </div>
                </div>

                <div class="col-md-6 text-left pl-5 ">
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
                <div class="col-md-12  text-justify">
                  <br>
                  <p class="mb-0 px-5">
                    <em> Harvest info: </em>
                  </p>
                  <p class="px-5">
                    {{ plant.harvest }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal fade"
       id="modelId"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Modal title
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          Body
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  name: 'Component',
  setup() {
    return {
      plant: computed(() => AppState.activePlant),
      gardenPlants: computed(() => AppState.gardenPlants)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pic{
  height: 18rem;
  width: 18rem;
  border: 5px groove grey;
  object-fit: cover;

}
.z{
  z-index: 1;
}

</style>
