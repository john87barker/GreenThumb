<template>
  <div class=" my-1 mx-0 card pb-1" data-target="#my-plant-details-modal" data-toggle="modal" @click="setActivePlant">
    <h5 class="text-center text-capitalize pt-1">
      {{ gardenPlants.plant.name }}
    </h5>
    <div class="d-flex justify-content-center pb-1">
      <img :src="gardenPlants.plant.picture" alt="" class="pic p-1  rounded ">
    </div>
    <div class="col-12 text-center pb-1" title="Remove Plant" @click.stop="removePlant(gardenPlants.plant.name, gardenPlants.id)">
      <button class="btn btn-outline-danger py-0 px-1">
        Remove
      </button>
    </div>
    <MyPlantDetailsModal />
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'
import { gardensService } from '../services/GardensService'
import Swal from 'sweetalert2'
export default {
  name: 'MyPlant',
  props: {
    gardenPlants: {
      type: Object,
      required: true
    }
    // activePlant: {
    //   type: Object,
    //   required: true
    // }
  },
  setup(props) {
    onMounted(async() => {
      try {
        // await plantsService.getAllGardenPlantsByGardenId()

      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      async setActivePlant() {
        AppState.activePlant = props.gardenPlants.plant
      },
      async removePlant(name, gardenPlantId) {
        try {
          await Swal.fire({
            title: 'Are you sure you want to remove this plant from your garden?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085D6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, remove it!'
          }).then(async(result) => {
            if (result.isConfirmed) {
              await gardensService.removePlant(gardenPlantId)
              Swal.fire(
                'You got it, dude!',
                name + ' has been removed from your garden.',
                'success'
              )
            }
          })
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>
.pic{
  height: 7rem;
  width: 7rem;
  object-fit: cover;
}
</style>
