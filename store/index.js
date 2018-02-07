import Vuex from 'vuex'
import article from './article/article.module'
import articles from './articles/articles.module'

const store = () => {
  return new Vuex.Store({
    modules: {
      Article: article,
      Articles: articles
    },

    state: {
      user: {
        isUserAuthenticated: false
      }
    },

    mutations: {
      setIsUserAuthenticated (state, isUserAuthenticated) {
        state.user.isUserAuthenticated = isUserAuthenticated
      }
    }
  })
}

export default store
