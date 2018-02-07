<template>
<div>
  <section class="container-fluid">
    <h1>Edit</h1>
    <p>Edit a blog post.</p>

    <edit-article v-if="article._id"></edit-article>
  </section>
</div>
</template>

<script>
import EditArticle from '~/components/EditArticle'

export default {
  middleware: 'authenticated',

  head () {
    return {
      title: 'Edit'
    }
  },

  async fetch ({ store, params }) {
    let article = await store.dispatch('Article/getArticle', params.id)
    store.commit('Article/SET_ARTICLE', article)
  },

  components: {
    EditArticle
  },

  computed: {
    article: {
      get () {
        return this.$store.state.Article.article
      }
    }
  }
}
</script>
