<template>
<div>
  <section class="container">
    <h1>Administration</h1>
    <p>Create, edit or delete your blog posts.</p>

    <get-articles class="mt-4"></get-articles>
  </section>
</div>
</template>

<script>
import GetArticles from './../../components/GetArticles'

export default {
  middleware: 'authenticated',

  components: {
    GetArticles
  },

  head () {
    return {
      title: 'Administration'
    }
  }
}
</script>
