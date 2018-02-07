import state from './articles.state'
import mutations from './articles.mutations'
import actions from './articles.actions'
import getters from './articles.getters'

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
