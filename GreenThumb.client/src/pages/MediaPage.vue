<template>
  <div class="MediaPage container-fluid">
    <div class="row text-light">
      <div class="col-md-12 text-center">
        <h1><span class="seeds">M</span>edia</h1>
        <hr class="border border-light">
        <hr class="border border-light">
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 py-3">
        <div class="container">
          <iframe width="300"
                  height="236"
                  src="https://www.youtube.com/embed/pLQuIuokP6Q"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="shadow border border-primary"
          ></iframe>
        </div>
      </div>
      <div class="col-md-4 py-3">
        <div class="container">
          <iframe width="300"
                  height="236"
                  src="https://www.youtube.com/embed/NrFlhSNdDDk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="shadow border border-primary"
          ></iframe>
        </div>
      </div>
      <div class="col-md-4 py-3">
        <div class="container">
          <iframe width="300"
                  height="236"
                  src="https://www.youtube.com/embed/5gllwSGuri0"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="shadow border border-primary"
          ></iframe>
        </div>
      </div>
      <div class="col-md-4 py-3">
        <div class="container">
          <iframe width="300"
                  height="236"
                  src="https://www.youtube.com/embed/KHPwNbIywFg"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="shadow border-primary border"
          ></iframe>
        </div>
      </div>
      <div class="col-md-4 py-3">
        <div class="container">
          <iframe width="300"
                  height="236"
                  src="https://www.youtube.com/embed/swLkA1cHJ4Y"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="shadow border border-primary"
          ></iframe>
        </div>
      </div>
      <div class="col-md-4 py-3">
        <div class="container">
          <iframe width="300"
                  height="236"
                  src="https://www.youtube.com/embed/zc7qJE9Nzo8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  class="shadow border border-primary"
          ></iframe>
        </div>
      </div>
    </div>
    <div class="row text-light">
      <div class="col-md-12 text-center">
        <h1><span class="seeds">A</span>rticles</h1>
        <hr class="border border-light">
        <hr class="border border-light">
      </div>
    </div>
    <div class="row">
      <h2 v-if="articles.length == 0">
        No articles to display <i class="mdi mdi-shovel"></i>
        <br>
        Try again later
      </h2>
      <div class="col-12 my-2 cardd" v-for="a in articles" :key="a.title">
        <Article :article="a" />
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { articlesService } from '../services/ArticlesService'
import Pop from '../utils/Notifier'
export default {
  name: 'MediaPage',
  setup() {
    onMounted(async() => {
      try {
        await articlesService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      articles: computed(() => AppState.articles)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
.seeds{
  font-size: 140px;
}
.cardd:hover{

  transform: scale(1.05);
  cursor: pointer;
  }
</style>
