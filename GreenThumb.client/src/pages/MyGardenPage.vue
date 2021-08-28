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
    <button @click="saveGarden">
      save garden
    </button>
    <div>
      <input type="number" v-model="gridData.settings.height" @change="adjustGrid">
      <input type="number" v-model="gridData.settings.width" @change="adjustGrid">
    </div>
    <GridTiles />
    <Grid />
  </div>
  <CreateGardenModal />
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
import { gardensService } from '../services/GardensService'
import { drawGrid, gridData } from '../utils/GridHelpers'

export default {
  name: 'MyGardenPage',
  setup() {
    onMounted(async() => {
      await gardensService.getGardensByCreatorId()
      await gardensService.getAllGardenPlantsByCreator()
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
        console.log('send me to the server', gridData.value)
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
