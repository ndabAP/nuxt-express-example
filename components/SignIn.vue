<template>
    <div>
        <h1>Sign-in</h1>
        <p>
            Sign-in to start writing for your blog. Just enter your first name and your password. Finally, click
            <kbd>Enter</kbd>. Use Alfarr as first name and 123456 as password.
        </p>

        <div class="row">
            <div class="col">
                <div class="form-group">
                    <label>First name</label>
                    <input v-model="firstName" class="form-control" type="text">
                </div>
            </div>

            <div class="col">
                <div class="form-group">
                    <label>Password</label>
                    <input
                            v-model="password"
                            class="form-control"
                            type="password"
                            @keyup.enter="signInPost">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        firstName: '',
        password: ''
      }
    },

    methods: {
      async signInPost () {
        await axios
          .post('/api/sign-in', {
            firstName: this.firstName,
            password: this.password
          })

        this.$store.commit('setIsUserAuthenticated', true)
        this.$router.push('/administration/list')
      }
    }
  }
</script>
