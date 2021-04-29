// 高级ES语法导致浏览器不支持
import $ from 'jquery'
import './css/nodot.css'
import './css/global.less'
import './css/ul.scss'

$(function(){
    $('li:odd').css('backgroundColor', '#00B26A')
    $('li:even').css('backgroundColor', '#06B4FE')
})

class Person {
    static info = 'zairesinatra'
}
console.log(Person.info);

// vue使用步骤
// 导入包
import Vue from 'vue'
// 导入单文件组件-根组件
import Zs from './components/zs.vue'
const vm = new Vue({
    el: '#app',
    // webpack 导入的 vue 不是最全的 vue => 阉割版 vue 仅支持 render 函数渲染组件
    // 不支持 template 属性与 component 属性
    render: h => h(Zs)
})