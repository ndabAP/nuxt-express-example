<template>
    <div>
        <section class="container">
            <sign-in></sign-in>
        </section>
    </div>
</template>

<script>
  import SignIn from './../components/SignIn'

  export default {
    components: {
      SignIn
    },

    head () {
      return {
        title: 'Sign-in'
      }
    }
  }
</script>
