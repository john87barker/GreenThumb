<template>
  <div class="row justify-content-center text-light w">
    <div class="col-md-12" v-if="!plant.name">
      <h1 class="col-md-12 text-center text-light">
        <span class="seeds">P</span>lant &nbsp;&nbsp;&nbsp; <span class="seeds">D</span>etails
      </h1>
      <hr class="border border-light" width="700">
      <h2 class="text-light text-center">
        Click on a Plant for it's Details
      </h2>
      <div class="col-md-12 justify-content-center d-flex  mr-0">
        <img class=" shadow border-top border-left rounded" width="450" src="https://images.unsplash.com/photo-1492496913980-501348b61469?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80">
      </div>
    </div>

    <div class="col-md-10 border-left border-top d-flex view-scroll my-2 shadow" v-else>
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
          <!-- REVIEW check these buttons show when they are supposed to show -->
          <div class="d-flex justify-content-between pb-3">
            <div class="d-flex justify-content-end " v-if="user.isAuthenticated && !user.garden">
              <button type="button" class="btn btn-outline-secondary shadow" @click.stop="addPlantToGarden(plant.name, plant.id, garden[0].id)">
                add to my garden
              </button>
            </div>
            <!-- TODO fix this...user.garden isn't real... -->
            <div v-if="user.garden && user.isAuthenticated">
              <button type="button" class="btn btn-outline-primary shadow" data-target="#create-garden-modal" data-toggle="modal">
                Start A Garden
              </button>
            </div>
            <div class="d-flex justify-content-start" v-if="!user.isAuthenticated">
              <button type="button" class="btn btn-outline-secondary shadow" @click="login">
                Login to Start Your Garden
              </button>
            </div>
            <div class="d-flex justify-content-end" v-if="user.isAuthenticated">
              <button type="button" class="btn btn-outline-secondary shadow" @click="goToGarden">
                My Garden
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <CreateGardenModal />
</template>

<script>
import { reactive } from '@vue/reactivity'
import { AppState } from '../AppState'
import { computed, watchEffect } from '@vue/runtime-core'
import { plantsService } from '../services/PlantsService'
import Pop from '../utils/Notifier'
import { AuthService } from '../services/AuthService'
import { router } from '../router'
import { gardensService } from '../services/GardensService'
export default {
  name: 'Component',
  setup() {
    return {

      plant: computed(() => AppState.activePlant),
      user: computed(() => AppState.user),
      garden: computed(() => AppState.gardens),

      async login() {
        AuthService.loginWithPopup()
      },

      async addPlantToGarden(pName, pId, gId) {
        try {
          await plantsService.addPlantToGarden({ plantId: pId, gardenId: gId })
          Pop.toast(pName + ' has been added to your garden!', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },

      goToGarden() {
        router.push({ name: 'MyGarden' })
      }
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
  // width: 90vw;
  overflow-y: auto;
  overflow-x: hidden !important;
}
.seeds {
  font-size: 120px;
}
.w{
  width: 48rem;
}
</style>
