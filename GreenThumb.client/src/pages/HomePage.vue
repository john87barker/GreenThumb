<template>
  <div class="home container-fluid pl-5">
    <div class="row">
      <div class="col-md-6 d-flex flex-column vh100">
        <h3 class="text-light mt-auto">
          <div v-if="!user.isAuthenticated">
            <i class="mdi mdi-account-question"></i><br> Sign up/login to manage your garden online!
          </div>
          <div v-if="user.isAuthenticated">
            Welcome, {{ user.email.split("@")[0] }} you have:
            <br> {{}} gardens with {{}} Plants
          </div>
        </h3>
        <img class="shadow border-top border-left rounded mt-auto mb-3 auto1" src="https://images.unsplash.com/photo-1581578017306-7334b15283df?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FyZGVuaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Planting a garden" width="501" height="751">
      </div>
      <div class="col-md-6 d-flex flex-column vh100">
        <img class=" shadow border-top border-left rounded mb-auto mt-3" src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2FyZGVuaW5nfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Seedlings" width="501" height="334">
        <!-- <Article :-->
        <a class="awhite" :href="articles[random].url" target="_blank" v-if="articles[random]">
          <div class="Article m-2 row border-top border-left rounded shadow border-light">
            <div class="col-md-3 d-flex px-0 align-items-center bg-dark">
              <img :src="articles[random].urlToImage" class="auto" alt="article picture">
            </div>
            <div class="col-md-8 p-2">
              <div class="border-bottom border-light">
                <b>{{ articles[random].title }}</b>
              </div>
              <div>
                {{ articles[random].description }}
              </div>
              <div class="text-info">
                {{ formatDate(articles[random].publishedAt) }}
                {{ articles[random].source.name }}
              </div>
            </div>
          </div>
        </a>
        <!-- <Article :-->
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { articlesService } from '../services/ArticlesService'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await articlesService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      user: computed(() => AppState.user),
      random: Math.floor(20 * Math.random()),
      gardens: computed(() => AppState.gardens),
      articles: computed(() => AppState.articles),
      formatDate(date) {
        // publishedAt: "2021-08-08T15:00:00Z"
        const datesplit = date.slice(0, 10).split('-')
        const datemodded = `${datesplit[1]} / ${datesplit[2]} / ${datesplit[0]}`
        return datemodded
      }
    }
  }
}
</script>

<style scoped lang="scss">
img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
.auto1{
  height: 85vh;
  width: auto;
  object-fit:contain
}
img .auto {
  width: auto;
  height: auto;
}
.awhite {
   color: white !important;
 }
.vh100{
  min-height: 100vh;
  max-height: 100vh;
}
</style>
