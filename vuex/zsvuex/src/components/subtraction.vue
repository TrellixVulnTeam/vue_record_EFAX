<template>
  <div>
      <!-- <h3>当前最新的count值为:{{count}}</h3> -->
      <h3>{{ $store.getters.showNum }}</h3>
      <button @click='subb'>减一</button>
      <button @click='subNN'>减N</button>
      <button @click='subAsyncc'>减1</button>
      <button @click='subAsync'>减1映射</button>
      <button @click='subNAsync(3)'>减N映射</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {

    }
  },
  // 钩子函数 => 函数!!
  created () {

  },
  methods: {
    ...mapMutations(['sub', 'subN']),
    ...mapActions(['subAsync', 'subNAsync']),
    subb() {
      this.sub()
    },
    subNN() {
      this.subN(3)
    },
    subAsyncc() {
      this.subAsync()
    }
  },
  computed: {
    ...mapState(['count'])
  }
}
</script>

<style scoped lang="less">

</style>
