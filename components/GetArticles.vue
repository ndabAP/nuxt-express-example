<template>
<div>
  <table class="table" v-if="articles.length > 0">
    <thead class="thead-inverse">
      <tr>
        <th>Identifier</th>
        <th>Title</th>
        <th>Created</th>
        <th>Administrate</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="article in articles">
        <td>{{ article._id }}</td>
        <td>{{ article.title }}</td>
        <td>{{ article.createdDate | date }}
        <td>
          <router-link class="btn btn-link" :to="{
            name: 'administration-edit-id',
            params: {
              id: article._id
            }
          }">
            Edit
          </router-link>
          <button type="button" class="btn btn-link" @click="deleteArticle(article._id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script>
import axios from 'axios'

export default {
  async created () {
    this.getArticles()
  },

  computed: {
    articles: {
      get () {
        return this.$store.state.Articles.articles
      },

      set (articles) {
        this.$store.commit('Articles/SET_ARTICLES', articles)
      }
    }
  },

  methods: {
    async getArticles () {
      let {data} = await axios
        .get('http://localhost:3000/api/get-articles')

      this.articles = data
    },

    async deleteArticle (id) {
      await axios
        .delete('http://localhost:3000/api/delete-article', {
          params: {
            id
          }
        })

      this.getArticles()
    }
  }
}
</script>
