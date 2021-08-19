<template>
  <aside class="row side-gradient d-flex text-light">
    <h3 class="col-md-12 p-1">
      <router-link class="navbar-brand d-flex text-light" :to="{ name: 'Home' }">
        Green Thumb
      </router-link>
    </h3>
    <h5 class="col-md-12">
      Explore
    </h5>
    <h5 class="col-md-12">
      My Garden
    </h5>
    <h5 class="col-md-12">
      Articles
    </h5>
    <h5 class="col-md-12">
      Our Community
    </h5>
    <div class="row ">
      <p class="col-md-12 mb-0 text-center">
        3 Day Forcast
      </p>
      <div class="col-md-12 d-flex justify-content-around">
        <div class="px-1">
          <div>
            Fri
          </div>
          <img src="../assets/img/weather-sunny.png" alt="sunny">
        </div>
        <div class="px-1">
          <div>
            Sat
          </div>
          <img src="../assets/img/weather-sunny.png" alt="sunny">
        </div>
        <div class="px-1">
          <div>
            Sun
          </div>
          <img src="../assets/img/weather-partly-cloudy.png" alt="sunny">
        </div>
      </div>
    </div>
  </aside>
</template>

<script>

export default {
  name: 'Component',
  setup() {
    return {}
  },
  components: {}
}
</script>

<style lang="scss" scoped>

.side-gradient{
 background: #000000;  /* fallback for old browsers */
background: -webkit-linear-gradient(to top, #0f9b0f, #000000);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to top, #0f9b0f, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

float: left;
box-shadow: inset 5px 0 pgx -5px black;
display: flex;
height: 100vh;
width: 15vw;
padding-left: 1em;
z-index: 1;
// padding-top: 1em;
}
</style>
