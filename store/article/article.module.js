import state from './article.state'
import mutations from './article.mutations'
import actions from './article.actions'
import getters from './article.getters'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
