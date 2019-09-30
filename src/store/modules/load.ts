import { GetterTree, MutationTree, ActionTree } from 'vuex'
// const moment = require('moment')
interface State {
  plan: any
}
const state: State = {
  plan: {}
}

const getters: GetterTree<State, any> = {
  getPlan: state => state.plan
}

const mutations: MutationTree<State> = {
  SET_PLAN(state, plan) {
    state.plan = plan
  }
}

const actions: ActionTree<State, any> = {
  // 获取订单列表
  async getRepayPlan({ commit }, ops) {
    commit('SET_PLAN', 1)
    return 1
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
