<template>
  <div class="row  height mb-2 d-flex justify-content-end text-light action cardd" @click.stop="setActivePlant">
    <div class="col-md-12 d-flex justify-content-center plant">
      <div class=" m-2 border button-to-expand shadow ">
        <h5 class="text-center text-capitalize">
          {{ plant.name }}
        </h5>
        <div class="text-center">
          <img :src="plant.picture" alt="" class="pic p-1 shadow ">
        </div>

        <div class="d-flex justify-content-center p-1">
          <div class="d-flex justify-content-end shadow" v-if="user.isAuthenticated && garden.length > 0">
            <button type="button" class="btn btn-outline-secondary " @click.stop="addPlantToGarden(plant.name, plant.id, garden[0].id)">
              add to my garden
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-start" v-if="!user.isAuthenticated">
          <button type="button" class="btn btn-outline-primary shadow " @click.stop="login">
            Login to Start a Garden
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// NOTE dropdown menu for selecting which garden, v-for over the dropdown items
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { plantsService } from '../services/PlantsService'
import { AuthService } from '../services/AuthService'
export default {
  name: 'Component',
  props: {
    plant: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      user: computed(() => AppState.user),
      garden: computed(() => AppState.gardens),
      userGardens: computed(() => AppState.gardenPlants),
      async setActivePlant() {
        AppState.activePlant = props.plant
      },
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
      }

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pic{
  height: 10rem;
  width: 10rem;
    object-fit: cover;
}
.height{
  width: 15vw;
}
.plant{
  width: 8rem;
}
.action {
  cursor: pointer;
}
.cardd:hover{

  transform: scale(1.05);
  cursor: pointer;
  }
</style>
