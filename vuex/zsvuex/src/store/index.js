import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  // 有且仅有 mutations 中的函数有修改 state 中的数据
  mutations: {
    // 不要在 mutations 函数中执行异步操作
    add(state) {
      // 变换状态
      state.count++
    },
    addN(state, step) {
      state.count += step
    },
    sub(state) {
      state.count--
    },
    subN(state, step) {
      state.count -= step
    }
  },
  actions: {
    // context 相当于 new Vuex.Store 的实例对象
    addAsync(context) {
      setTimeout(() => {
        // 在 actions 中不能直接修改 state 中数据
        // 通过 context.commit() 触发某个 mutations
        context.commit('add')
      }, 1000)
    },
    addNAsync(context, step) {
      setTimeout(() => {
        context.commit('addN', step)
      }, 1000)
    },
    subAsync(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    subNAsync(context, step) {
      setTimeout(() => {
        context.commit('subN', step)
      }, 1000)
    }
  },
  modules: {
  },
  getters: {
    showNum(state) {
      return '当前最新数据是[' + state.count + ']'
    }
  }
})
