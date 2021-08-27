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
          <div class="col-md-12 d-flex  justify-content-center p-1">
            <img :src="account.picture" alt="" class="rounded-circle pic">
          </div>
          <div class="col-md-12 d-flex justify-content-around p-1">
            <div><em> Name</em>: {{ account.name }}</div>
            <div><em> Email </em>: {{ account.email }}</div>
          </div>
          <!-- TODO this isn't right... user."something" needs to make it not show when they already have a garden... -->
          <div class="col d-flex justify-content-center pb-2" v-if="user.isAuthenticated && gardens.length < 1">
            <button type="button" class="btn btn-outline-primary" data-target="#create-garden-modal" data-toggle="modal">
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
import { AuthService } from '../services/AuthService'

export default {
  name: 'MyGardenPage',
  setup() {
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
  height: 7rem;
}
.action {
  cursor: pointer;
}
</style>
