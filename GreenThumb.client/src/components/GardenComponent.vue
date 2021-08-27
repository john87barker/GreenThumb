<template>
  <div class="row justify-content-center mt-5 text-light ">
    <div class="col-11 border-top border-left rounded shadow">
      <div class="row">
        <h1 class="col-md-12 text-center py-3 mb-0">
          {{ garden.name }}
        </h1>
      </div>
      <div class="row">
        <div class="col-md-6 mb-3 d-flex" v-if="garden.gardenPic">
          <img class="rounded coverImg shadow mx-auto" :src="garden.gardenPic" alt="Garden Picture" />
        </div>
        <div class="col-md-6 mb-3 d-flex" v-else>
          <img class="rounded coverImg shadow mx-auto" src="https://th.bing.com/th/id/OIP.DC4RDXsGdC5YUIpm_6QtzAHaFj?pid=ImgDet&rs=1" alt="Garden Placeholder plant" />
        </div>
        <div class="col-md-6 d-flex flex-column">
          <h6>{{ garden.body }}</h6>
          <h6 class="mt-auto">
            Zip Code: {{ garden.zipCode }}
          </h6>
          <h6>Hardiness Zone: {{ garden.hZone }}</h6>
          <h6>Number of Plants: {{ gardenPlants.length }}</h6>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 d-flex mb-1 px-4 pb-2 justify-content-around">
          <div class="mt-1 pb-1" title="Remove Plant" @click.stop="removeGarden(garden.name, garden.id)">
            <button class="btn btn-outline-danger p-1 shadow" title="remove all plants">
              <h5> Harvest Garden</h5>
            </button>
          </div>
          <div class="mt-1 pb-1 action" title="Edit Garden" data-toggle="modal" data-target="#edit-garden">
            <button class="btn btn-outline-danger p-1 shadow" title="editGarden">
              <h5>Edit My Garden</h5>
            </button>
          </div>
        </div>
      </div>

      <!-- //NOTE v-if this so that the following shows if they already have a garden... -->
      <div class="d-flex">
        <div class="row d-flex justify-content-center flex-row mb-2">
          <div class="col-md-10 border-top border-left  pt-2 shadow">
            <div class="my-2">
              Have a question?
            </div>
            <div class="my-2">
              Want to share a success story?
            </div>

            <span v-if="account.id">
              <button type="button" class="btn btn-outline-secondary mt-2 my-3 shadow" data-target="#create-post-modal" data-toggle="modal" title="create post">
                + New Post
              </button>
            </span>
          </div>
        </div>
        <div class="col-md-9 d-flex ">
          <div class="row border border-light ">
            <div class="col-md-3 px-2 text-dark" v-for="p in gardenPlants" :key="p.id">
              <MyPlant :garden-plants="p" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Edit Garden Modal -->
  <div class="modal fade"
       id="edit-garden"
       tabindex="-1"
       role="dialog"
       aria-labelledby="edit-garden"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            Edit My Garden
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="editGarden">
            <div class="form-group">
              <label class="pr-2" for="name">Garden Name</label>
              <input type="text"
                     id="name"
                     class="form-control"
                     placeholder=" Garden Name..."
                     v-model="state.editedGarden.name"
              >
            </div>
            <div class="form-group">
              <label class="pr-2" for="body">Garden Description</label>
              <textarea type="text"
                        id="body"
                        class="form-control"
                        placeholder="Name of Garden..."
                        v-model="state.editedGarden.body"
              ></textarea>
            </div>
            <div class="form-group">
              <label class="pr-2" for="gardenPic">Picture of My Garden</label>
              <input type="text"
                     id="gardenPic"
                     class="form-control"
                     placeholder="Image Url..."
                     v-model="state.editedGarden.gardenPic"
              >
            </div>
            <input
              class="form-control"
              type="number"
              v-model="state.editedGarden.hZone"
              id="hZone"
              placeholder="Location Hardiness Zone..."
              min="1"
              max="13"
            >
            <br>
            <input
              class="form-control"
              type="number"
              v-model="state.editedGarden.zipCode"
              id="zipCode"
              placeholder="Location zipcode..."
              minlength="5"
              maxlength="5"
            >
            <br>
            <div>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">
                Close
              </button>
              <button type="submit" class="btn btn-primary">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!-- End edit garden modal -->
  <CreatePostModal />
</template>

<script>
import { computed, reactive, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { gardensService } from '../services/GardensService'
import Pop from '../utils/Notifier'
import Swal from 'sweetalert2'
import { logger } from '../utils/Logger'
import $ from 'jquery'

export default {
  name: 'Component',
  props: {
    garden: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    onMounted(async() => {
      await gardensService.getPlantsByGardenId(props.garden.id)
    })
    const state = reactive({
      editedGarden: {
        id: props.garden.id
        // name: props.garden.name,
        // body: props.garden.body,
        // gardenPic: props.garden.gardenPic,
        // hZone: props.garden.hZone,
        // zipCode: props.garden.zipCode
      }
    })
    return {
      state,
      gardenPlants: computed(() => AppState.gardenPlants),
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async removeGarden(gName, gId) {
        try {
          await Swal.fire({
            title: 'Are you sure you want to remove this garden?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085D6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              await gardensService.removeGarden(gId)
              Swal.fire(
                'You got it, dude!',
                gName + ' has been removed.',
                'success'
              )
            }
          })
        } catch (error) {
          Pop.toast(error, 'error')
        }
      },
      async editGarden() {
        try {
          await gardensService.editGarden(state.editedGarden)
          state.editedGarden = {}
          $('#edit-garden').modal('hide')
        } catch (error) {
          logger.log(error)
        }
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.coverImg {
  max-width: 300px;
}
</style>
