<template>
  <aside class="row side-gradient text-light pr-0">
    <h3 class="col-md-12 p-1  border-bottom sidecard">
      <router-link class="navbar-brand d-flex text-light" :to="{ name: 'Home' }">
        <img src="../assets/img/GTLogo.png" alt="" class="small">
      </router-link>
    </h3>
    <div class="col-md-12 sidecard z">
      <div class="navbar-text">
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
            <p>Account Info</p>
            <img
              :src="user.picture"
              alt="user photo"
              width="30"
              class="rounded"
            />
          <!-- <span class="mx-3">{{ user.name }}</span> -->
          </div>
          <div
            class="dropdown-menu p-0 list-group w-100 z"
            :class="{ show: state.dropOpen }"
            @click="state.dropOpen = false"
          >
            <router-link :to="{ name: 'Account' }">
              <div class="list-group-item list-group-item-action hoverable">
                Account
              </div>
            </router-link>
            <div
              class="list-group-item list-group-item-action hoverable"
              @click="logout"
            >
              logout
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12  border-bottom  border-top sidecard  ">
      <router-link :to="{name: 'Plants'}" class="nav-link text-light text-left text-capitalize p-0">
        Explore
      </router-link>
    </div>
    <div class="col-md-12 border-bottom sidecard">
      My Garden
    </div>
    <div class="col-md-12 border-bottom sidecard">
      <router-link :to="{ name: 'Media' }" class="nav-link text-light text-left p-0 text-capitalize  ">
        Media
      </router-link>
    </div>
    <div class="col-md-12 border-bottom sidecard">
      <router-link :to="{ name: 'Posts' }" class="nav-link text-light text-left p-0 text-capitalize  ">
        VeggieTells
      </router-link>
    </div>
    <div class="col-md-12 mb-0 text-center">
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
.hoverable {
  cursor: pointer;
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
}
.small{
  height: 100px;
}
</style>
