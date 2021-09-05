<template>
  <div class="container-fluid MyGardenPage" v-if="account">
    <div class="row justify-content-center mt-5">
      <div class="col-9 shadow rounded border-top border-left text-light d-flex justify-content-center py-3">
        <div v-if="!user.isAuthenticated" class=" col-md 3 d-flex justify-content-center mb-3">
          <button type="button" class="btn btn-outline-primary mt-3" @click="login">
            Login to Start Your Garden
          </button>
        </div>

        <div v-else class="row">
          <div class="col-md-12 d-flex p-1">
            <img :src="account.picture" alt="" class="rounded-circle mx-auto pic">
          </div>
          <div class="col-md-12 p-1">
            <div class="row">
              <div class="col-md-6 text-center p-1">
                <b> Name</b>: {{ account.name }}
              </div>
              <div class="col-md-6 text-center p-1">
                <b> Email </b>: {{ account.email }}
              </div>
            </div>
          </div>

          <div class="col d-flex justify-content-center pb-2" v-if="user.isAuthenticated && gardens.length < 1">
            <button type="button" class="btn btn-outline-primary" data-target="#create-garden-modal" data-toggle="modal">
              Create New Garden
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 px-0" v-for="garden in gardens" :key="garden.id">
      <GardenComponent :garden="garden" />
    </div>
    <div v-if="user.isAuthenticated">
      <div class="text-light text-center mt-3 " v-if="account">
        <h3 class="pb-2">
          Plan your garden here!
        </h3>
        Width: <input type="number" v-model="gridData.settings.height" @change="adjustGrid">
        Length: <input type="number" v-model="gridData.settings.width" @change="adjustGrid">
        <div class="p-3">
          Press shift and click to remove item from garden.
        </div>
        <button @click="saveGarden" class="m-2 ml-5 ">
          save garden
        </button>
      </div>
      <div class="p-3 text-light">
        <div class="p-3">
          Plants to choose from:
        </div>
        <GridTiles />
        <Grid />
      </div>
    </div>
  </div>
  <CreateGardenModal />
</template>

<script>
import { computed, onMounted, ref, watchEffect } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
import { gardensService } from '../services/GardensService'
import { drawGrid, gridData, setGridData } from '../utils/GridHelpers'
import Pop from '../utils/Notifier'

export default {
  name: 'MyGardenPage',
  setup() {
    const primaryGarden = ref({})
    onMounted(async() => {
      await gardensService.getGardensByCreatorId()
      await gardensService.getAllGardenPlantsByCreator()
    })

    watchEffect(() => {
      if (AppState.gardens.length) {
        primaryGarden.value = AppState.gardens[0]
        setGridData({
          settings: primaryGarden.value.settings,
          map: primaryGarden.value.gardenPlots
        })
        drawGrid()
      }
    })

    return {
      gridData,
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      gardens: computed(() => AppState.gardens),
      adjustGrid() {
        drawGrid()
      },
      async saveGarden() {
        await gardensService.editGarden(primaryGarden.value)
        Pop.toast('Garden layout has been saved!', 'success')
      },
      async login() {
        AuthService.loginWithPopup()
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pic {
  height: 7rem;
}
.action {
  cursor: pointer;
}
</style>
