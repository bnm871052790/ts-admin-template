import { GetterTree, MutationTree, ActionTree } from 'vuex'
// const moment = require('moment')
export interface State {
  collapse: boolean
}
const state: State = {
  // 菜单开关
  collapse: true
}

const getters: GetterTree<State, any> = {
  getCollapse: state => state.collapse
}

const mutations: MutationTree<State> = {
  // 添加
  SET_COLLAPSE(state) {
    state.collapse = !state.collapse
  }
}

const actions: ActionTree<State, any> = {}

export default {
  state,
  getters,
  mutations,
  actions
}
