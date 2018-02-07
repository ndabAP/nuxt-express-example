<template>
<div>
  <ul class="nav">
    <li class="nav-item">
      <router-link class="nav-link active" :to="{name: 'index'}">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'sign-in'}" v-if="!isUserAuthenticated">Sigin-in</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'administration-list'}" v-if="isUserAuthenticated">Administration</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" :to="{name: 'administration-create'}" v-if="isUserAuthenticated">Create</router-link>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  computed: {
    isUserAuthenticated: {
      get () {
        return this.$store.state.user.isUserAuthenticated
      }
    }
  }
}
</script>
