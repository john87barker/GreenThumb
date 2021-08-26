<template>
  <div class="container-fluid MyGardenPage" v-if="account">
    <div class="row justify-content-center mt-5">
      <div class="col-9 shadow rounded bg-info d-flex justify-content-center py-3">
        <div v-if="!user.isAuthenticated" class=" col-md 3 d-flex justify-content-center mb-3">
          <button type="button" class="btn btn-outline-primary mt-3" @click="login">
            Login to Start Your Garden
          </button>
        </div>

        <div v-else class="row">
          <div class="col-md-12 d-flex  justify-content-center p-1">
            <img :src="user.picture" alt="" class="rounded-circle pic">
          </div>
          <div class="col-md-12 d-flex justify-content-around p-1">
            <div><em> Name</em>: {{ user.name }}</div>
            <div><em> Email </em>: {{ user.email }}</div>
          </div>
          <div class="col d-flex justify-content-center pb-2" v-if="!user.garden">
            <button type="button" class="btn btn-primary" data-target="#create-garden-modal" data-toggle="modal">
              Create New Garden
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 " v-for="garden in gardens" :key="garden.id">
      <GardenComponent :garden="garden" />
    </div>
  </div>
  <CreateGardenModal />
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { gardensService } from '../services/GardensService'
import { AuthService } from '../services/AuthService'
export default {
  name: 'MyGardenPage',
  setup() {
    onMounted(async() => {
      try {
        // REVIEW commented this out - it was pulling gardens before authorizing and giving us an error, so we put this function in AuthService to do after authentication
        // await gardensService.getGardensByCreatorId()
        // await gardensService.getAllGardenPlantsByCreator()
      } catch (error) {
        Pop.toast('Could not get all gardens', 'error')
      }
    })
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      gardens: computed(() => AppState.gardens),
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
  height: 5rem;
}
</style>
