<template>
  <div class="Article p-2 m-1 col-12 border border-light">
    <a class="awhite" :href="article.url">
      <div class="div">
        <img :src="article.urlToImage" alt="article picture">
      </div>
      <div>
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
    </a>
  </div>
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
