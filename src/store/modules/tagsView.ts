import { GetterTree, MutationTree, ActionTree } from 'vuex'
// const moment = require('moment')
export interface State {
  include: string
}
const state: State = {
  include: 'root'
}

const getters: GetterTree<State, any> = {
  getPlan: state => state.include
}

const mutations: MutationTree<State> = {
  // 添加
  SET_INCLUDE(state, routeArr: any[]) {
    const arr = ['Root']
    routeArr.forEach((item: any) => {
      if (item.meta.keepAlive) arr.push(item.name)
    })
    state.include = arr.join(',')
  },
  // 删除
  DEL_INCLUDE(state, name: string) {
    const includeArr = state.include.split(',')
    const index = includeArr.indexOf(name)
    if (index >= 0) {
      includeArr.splice(index, 1)
      state.include = includeArr.join(',')
    }
  }
}

const actions: ActionTree<State, any> = {}

export default {
  state,
  getters,
  mutations,
  actions
}
