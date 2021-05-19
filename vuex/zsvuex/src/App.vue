<template>
  <div>
    <my-addition></my-addition>
    <p>----------------------</p>
    <my-subtraction></my-subtraction>
  </div>
</template>

<script>
import addition from './components/addition.vue'
import subtraction from './components/subtraction.vue'
export default {
  data () {
    return {

    }
  },
  // 钩子函数 => 函数!!
  created () {

  },
  methods: {

  },
  components: {
    'my-addition': addition,
    'my-subtraction': subtraction
  }
}
</script>
