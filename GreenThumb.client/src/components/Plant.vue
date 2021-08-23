<template>
  <div class="col-md-7 card" v-for="p in plants" :key="p.id">
    <div class="row">
      <h1 class="col-md-12 text-center">
        {{ p.name }}
        Tomato
      </h1>
      <hr>
      <div class="d-flex justify-content-between pb-3">
        <div class="col-md-6 d-flex justify-content-center ">
          <img src="https://place-puppy.com/300x300" class="pic ">
        </div>
        <div class="col-md-6 text-left d-flex justify-content-center">
          Body Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt vitae hic illo sapiente aspernatur nam veniam saepe similique dignissimos reprehenderit
        </div>
      </div>

      <div class="col-md-6 text-right pr-5">
        <p class="my-0">
          Plant Family
        </p>
        <p class="my-0">
          Required Sunlight
        </p>
        <p class="my-0">
          Warm/Cool
        </p>
      </div>
      <div class="col-md-6">
        <p class="my-0">
          Hardiness Zones
        </p>
        <p class="my-0">
          days to maturity
        </p>
        <p class="my-0">
          planting horizontal space
        </p>
        <p class="my-0">
          plant height
        </p>
      </div>
      <div class="col-md-12 py-3">
        <p>  Harvest info: </p>
        <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque accusantium tempora quia at quibusdam, modi doloribus aliquam, iure velit quidem vitae, voluptatum hic fugit expedita exercitationem doloremque ratione dolor necessitatibus!</p>
        <!-- NOTE add v-if's for whether the user has logged in or not.  -->
        <div class="d-flex justify-content-between">
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-outline-primary ">
              add to my garden
            </button>
          </div>
          <div class="d-flex justify-content-start">
            <button type="button" class="btn btn-outline-primary ">
              create an account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Component',
  props: {
    plant: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.pic{
  max-height: 10rem;
}
</style>
