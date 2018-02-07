import Vue from 'vue'

const mutations = {
  SET_ARTICLE (state, article) {
    state.article = article
  },

  SET_ID (state, id) {
    Vue.set(state.article, '_id', id)
  },

  SET_TITLE (state, title) {
    Vue.set(state.article, 'title', title)
  },

  SET_TEXT (state, text) {
    Vue.set(state.article, 'text', text)
  },

  RESET_ARTICLE (state) {
    state.article = {
      _id: '',
      title: '',
      text: ''
    }
  }
}

export default mutations
