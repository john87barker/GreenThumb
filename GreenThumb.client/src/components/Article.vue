<template>
  <a class="awhite" :href="article.url" target="_blank">
    <div class="Article m-2 row border-top border-left rounded shadow border-light">
      <div class="col-md-3 p-0">
        <img :src="article.urlToImage" class="w-100 h-100" alt="article picture">
      </div>

      <div class="col-md-8 p-5">
        <div class="border-bottom border-light">
          {{ article.title }}
        </div>
        <div>
          {{ article.description }}
        </div>
        <div>
          {{ formatDate(article.publishedAt) }}
          {{ article.source.name }}
        </div>
      </div>
    </div>

  </a>
</template>

// source: {id: null, name: "Lifehacker.com"}
// url: "https://lifehacker.com/complete-these-gardening-tasks-in-august-to-get-ready-f-1847440517"

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      formatDate(date) {
        // publishedAt: "2021-08-08T15:00:00Z"
        const datesplit = date.slice(0, 10).split('-')
        const datemodded = `${datesplit[1]} / ${datesplit[2]} / ${datesplit[0]}`
        return datemodded
      }
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
img {
  height: 6vh;
}
.awhite {
   color: white !important;
 }
</style>
