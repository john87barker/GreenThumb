<template>
  <div class="container-fluid GardenPage">
    <div class="row justify-content-center mt-5" v-if="gardens[0] && gardens[0].creator ">
      <div class="col-9 shadow rounded border-top border-left text-light d-flex justify-content-center py-3">
        <div class="row">
          <div class="col-md-12 d-flex  justify-content-center p-1">
            <img :src="gardens[0].creator.picture" alt="" class="rounded-circle pic">
          </div>
          <div class="col-md-12 d-flex justify-content-around p-1">
            <div><em> Name</em>: {{ gardens[0].creator.name }}</div>
            <div><em> Email </em>: {{ gardens[0].creator.email }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 " v-for="garden in gardens" :key="garden.id">
      <GardenComponent :garden="garden" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { gardensService } from '../services/GardensService'
import { AuthService } from '../services/AuthService'
import { useRoute } from 'vue-router'
export default {
  name: 'GardenPage',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      await gardensService.getGardensByProfileId(route.params.id)
    })
    return {
      route,
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
  height: 7rem;
}
.action {
  cursor: pointer;
}
</style>
