<template>
  <section class="container">
    <div class="row">
      <div class="col">
        <h1>{{article.title}}</h1>
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
    article: {
      get () {
        return this.$store.state.Article.article
      }
    }
  }
}
</script>
