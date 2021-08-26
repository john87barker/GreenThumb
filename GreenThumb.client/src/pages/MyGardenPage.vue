<template>
  <div class="container-fluid MyGardenPage" v-if="account">
    <div class="row justify-content-center mt-5">
      <div class="col-9 shadow rounded bg-info">
        <div class="d-flex  justify-content-center p-1">
          <img :src="user.picture" alt="account pic" class="rounded-circle pic">
        </div>
        <div class="d-flex justify-content-around p-1">
          <h5>{{ user.name }}</h5>
          <h5>{{ user.email }}</h5>
        </div>
        <div class="col d-flex justify-content-center pb-2">
          <button type="button" class="btn btn-primary" data-target="#create-garden-modal" data-toggle="modal">
            Create New Garden
          </button>
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
      gardens: computed(() => AppState.gardens)
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
