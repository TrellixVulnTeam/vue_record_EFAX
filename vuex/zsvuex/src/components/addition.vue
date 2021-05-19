<template>
  <div>
      <!-- template中this可以省略 -->
      <!-- <h3>当前最新的count值为: {{this.$store.state.count}}</h3> -->
      <h3>{{ showNum }}</h3>
      <button @click="btn">加一</button>
      <button @click="btnRandom">加N</button>
      <button @click="btnAsync">异步加1</button>
      <button @click="btnNAsync">异步加N</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  // 钩子函数 => 函数!!
  created () {

  },
  methods: {
    btn() {
      // 不要从组件直接修改全局的数据
      // this.$store.state.count++
      this.$store.commit('add')
    },
    btnRandom() {
      // commit 作用就是调用某个 mutation 函数
      this.$store.commit('addN', 6)
    },
    // 异步自增加一
    btnAsync() {
      // dispatch 用来触发某个 action 函数
      this.$store.dispatch('addAsync')
    },
    btnNAsync() {
      this.$store.dispatch('addNAsync', 5)
    }
  },
  computed: {
    ...mapGetters(['showNum'])
  }
}
</script>

<style scoped lang="less">

</style>
