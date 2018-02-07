<template>
<div>
  <section class="container-fluid">
    <h1>Create</h1>
    <p>Create a new blog post.</p>

    <create-article class="mt-4"></create-article>
  </section>
</div>
</section>
</template>

<script>
import CreateArticle from './../../components/CreateArticle'

export default {
  middleware: 'authenticated',

  components: {
    CreateArticle
  },

  head () {
    return {
      title: 'Create'
    }
  }
}
</script>
