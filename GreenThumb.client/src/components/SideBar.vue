<template>
  <aside class="row side-gradient text-light pr-0">
    <h3 class="col-md-12 p-1  border-bottom sidecard">
      <router-link class="navbar-brand d-flex text-light" :to="{ name: 'Home' }">
        <img src="../assets/img/GTLogoVertical.png" alt="" class="logo  pl-1 pr-4 py-3">
      </router-link>
    </h3>
    <div class="col-md-12 sidecard py-1 z mx-0">
      <button
        class="btn btn-outline-primary text-uppercase"
        @click="login"
        v-if="!user.isAuthenticated"
      >
        Login
      </button>

      <div class="dropdown" v-else>
        <div
          class="dropdown-toggle"
          @click="state.dropOpen = !state.dropOpen"
        >
          <span class="seeds">A</span>CCOUNT
          <img
            :src="user.picture"
            alt="user photo"
            width="35"
            class="rounded"
          />
          <!-- <div class="mx-3">
            {{ user.name }}
          </div> -->
          <div
            class="dropdown-menu p-0 list-group w-100"
            :class="{ show: state.dropOpen }"
            @click="state.dropOpen = false"
          >
            <router-link :to="{ name: 'MyGarden' }">
              <div class="list-group-item list-group-item-action action">
                Account
              </div>
            </router-link>
            <div
              class="list-group-item list-group-item-action action"
              @click="logout"
            >
              logout
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12  border-bottom  border-top sidecard py-1">
      <router-link :to="{name: 'Plants'}" class="nav-link text-light text-left text-capitalize p-0">
        <span class="seeds">P</span>LANTS
      </router-link>
    </div>
    <div class="col-md-12  border-bottom  border-top sidecard py-1">
      <router-link :to="{name: 'MyGarden'}" class="nav-link text-light text-left text-capitalize p-0">
        <span class="seeds">M</span>Y &nbsp;&nbsp;&nbsp; <span class="seeds">G</span>ARDEN
      </router-link>
    </div>
    <div class="col-md-12 border-bottom sidecard py-1">
      <router-link :to="{ name: 'Media' }" class="nav-link text-light text-left p-0 text-capitalize  ">
        <span class="seeds">M</span>EDIA
      </router-link>
    </div>
    <div class="col-md-12 border-bottom sidecard py-1">
      <router-link :to="{ name: 'Posts' }" class="nav-link text-light text-left p-0 text-capitalize  ">
        <span class="seeds">V</span>EGGIE &nbsp;&nbsp;&nbsp; <span class="seeds">T</span>ELLS
      </router-link>
    </div>
    <div class="col-md-12 mb-0 text-center py-3">
      3 Day Forcast
    </div>
    <div class="col-12 border-bottom">
      <Weather />
    </div>
  </aside>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { AuthService } from '../services/AuthService'
import { weathersService } from '../services/WeathersService'

export default {
  name: 'Component',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    onMounted(async() => {
      await weathersService.getWeather()
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin })
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

.side-gradient{
//  background: #000000;  /* fallback for old browsers */
// background: -webkit-linear-gradient(to top, #0f9b0f, #000000);  /* Chrome 10-25, Safari 5.1-6 */
// background: linear-gradient(to top, #0f9b0f, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
background-color: #000000;
float: left;
box-shadow: inset 5px 0 pgx -5px black;
display: flex;
height: 100vh;
padding-left: 1em;
// z-index: 1;
// padding-top: 1em;
}
.sidecard:hover{
  color: #a9f1a9;
  transform: scale(1.05);
  cursor: pointer;
  }
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(.75);
}

a{
  margin: 0rem;
  padding: 0rem;
}
a:hover {
  text-decoration: none;
}

.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
.z{
  z-index: 1;
  margin: 0;
}
.small{
  height: 100px;
}
.seeds{
  font-size: 40px;
}
.logo{
  width: 100%;
}
</style>
