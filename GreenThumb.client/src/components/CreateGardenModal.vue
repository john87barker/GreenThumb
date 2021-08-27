<template>
  <div class="create-garden-form">
    <div class="modal fade" id="create-garden-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <form @submit.prevent="createGarden">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Create Garden
              </h5>
              <button type="button" class="btn-close btn btn-outline-danger" data-dismiss="modal" aria-label="Close" title="close">
                <i class="mdi mdi-close"></i>
              </button>
            </div>
            <div class="modal-body">
              <input
                class="form-control"
                type="text"
                v-model="state.rawGarden.name"
                id="name"
                placeholder="Garden Name..."
                required
                minlength="4"
                maxlength="50"
              >
              <br>
              <textarea
                class="form-control"
                id="body"
                v-model="state.rawGarden.body"
                rows="5"
                placeholder="Tell us about your garden!"
                required
                minlength="4"
                maxlength="240"
              >
          </textarea>
              <br>
              <input
                class="form-control"
                type="number"
                v-model="state.rawGarden.zipCode"
                id="zipCode"
                placeholder="Location zipcode..."
                required
                minlength="5"
                maxlength="5"
              >
              <br>
              <input
                class="form-control"
                type="number"
                v-model="state.rawGarden.hZone"
                id="hZone"
                placeholder="Location Hardiness Zone..."
                min="1"
                max="13"
              >
              <br>
              <input
                class="form-control"
                type="text"
                v-model="state.rawGarden.gardenPic"
                id="media"
                placeholder="Media URL..."
                minlength="4"
              >

              <div class="modal-footer">
                <button type="submit" class="btn btn-primary" data-toggle="modal" data-target="#createGarden">
                  Submit Garden
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { reactive } from '@vue/reactivity'
import Pop from '../utils/Notifier'
import { gardensService } from '../services/GardensService'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'
import $ from 'jquery'
export default {
  name: 'CreateGardenModal',
  setup() {
    const router = useRouter()
    const state = reactive({
      rawGarden: {}
    })
    return {
      state,
      router,
      account: computed(() => AppState.account),
      gardens: computed(() => AppState.gardens),
      async createGarden() {
        try {
          await gardensService.createGarden(state.rawGarden)
          state.rawGarden = {}
          Pop.toast('Garden Created', 'success')
          $('#create-garden-modal').modal('hide')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  },
  components: {
  }
}
</script>
<style lang="scss" scoped>
</style>
