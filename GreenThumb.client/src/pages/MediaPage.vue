<template>
  <div class="MediaPage container-fluid">
    <div class="row">
      <h2 v-if="articles.length == 0">
        No articles to display <i class="mdi mdi-shovel"></i>
        <br>
        Try again later
      </h2>
      <div class="col-12" v-for="a in articles" :key="a.title">
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

</style>
