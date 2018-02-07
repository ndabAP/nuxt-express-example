<template>
  <section class="container">
    <div class="row mb-4" v-for="article in articles" v-if="articles.length > 0">
      <div class="col">
        <h1><router-link :to="{
            name: 'view-id', params: {
              id: article._id
            }
          }">{{article.title}}</router-link></h1>
        <p class="text-muted">{{article.createdDate | date}}</p>
        <div v-html="$options.filters.markdown(article.text)"></div>
      </div>
    </div>
  </section>
</section>
</template>

<script>
export default {
  computed: {
    articles: {
      get () {
        return this.$store.state.Articles.articles
      }
    }
  }
}
</script>
