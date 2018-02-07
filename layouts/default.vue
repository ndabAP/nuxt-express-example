<template>
<div>
  <navigation-bar class="mb-4"></navigation-bar/>
  <nuxt/>
</div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'

export default {
  components: {
    NavigationBar
  }
}
</script>
