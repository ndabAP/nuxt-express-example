<template>
  <section class="container">
    <list-articles></list-articles>
  </section>
</section>
</template>

<script>
import axios from 'axios'
import ListArticles from '~/components/ListArticles'

export default {
  async fetch ({ store }) {
    let {data} = await axios.get('http://localhost:3000/api/get-articles')
    store.commit('Articles/SET_ARTICLES', data)
  },

  head () {
    return {
      title: 'Home'
    }
  },

  components: {
    ListArticles
  }
}
</script>
