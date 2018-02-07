<template>
    <section class="container">
        <view-article></view-article>
    </section>
</template>

<script>
  import ViewArticle from '~/components/ViewArticle'

  export default {
    head () {
      return {
        title: 'View'
      }
    },

    components: {
      ViewArticle
    },

    async fetch ({store, params}) {
      let article = await store.dispatch('Article/getArticle', params.id)
      store.commit('Article/SET_ARTICLE', article)
    }
  }
</script>
