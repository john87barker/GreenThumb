<template>
  <div class="row justify-content-center mt-5 text-light ">
    <div class="col-11 border-top border-left rounded shadow">
      <div class="row">
        <h1 class="col-8 text-right py-3">
          {{ garden.name }}
        </h1>
        <div class="col-4 text-right mt-4 pb-1" title="Remove Plant" @click.stop="removeGarden(garden.name, garden.id)">
          <button class="btn btn-outline-danger p-1 shadow" title="remove all plants">
            <h5> Harvest Garden</h5>
          </button>
        </div>
        <div class="col-md-12 d-flex justify-content-around mb-3">
          <div>{{ garden.body }}</div>
          <div>zip code: {{ garden.zipCode }}</div>
        </div>
      </div>
      <div class="row">
      </div>
      <!-- //NOTE v-if this so that the following shows if they already have a garden... -->
      <div class="d-flex">
        <div class="row d-flex justify-content-center flex-row mb-2">
          <div class="col-md-10 border-top border-left  pt-2 shadow">
            <!-- TODO add question right here -->
            Have a question? <br> Want to share a success story?
            <br>
            <span v-if="account.id">
              <button type="button" class="btn btn-outline-secondary mt-2 my-3 shadow" data-target="#create-post-modal" data-toggle="modal" title="create post">
                + New Post
              </button>
            </span>
          </div>
        </div>
        <div class="col-md-9 d-flex ">
          <div class="row border border-dark ">
            <div class="col-md-3 px-2 text-dark" v-for="p in gardenPlants" :key="p.id">
              <MyPlant :garden-plants="p" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <CreateGardenModal />
  <CreatePostModal />
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { gardensService } from '../services/GardensService'
import Pop from '../utils/Notifier'
export default {
  name: 'Component',
  props: {
    garden: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      gardenPlants: computed(() => AppState.gardenPlants),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async removeGarden(gName, gId) {
        try {
          await gardensService.removeGarden(gId)
          Pop.toast(gName + 'your garden has been deleted', 'success')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
