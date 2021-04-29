let name = "xzy"
let age = 23
let username = "zairesinatra"

function show () {
    console.log("666");
}
export default {
    name,
    age,
    // 暴露方法不是执行方法
    show
    
}
// 按需导出不会与默认导出冲突
export let usr = 'xxxzzzyyy'
export let role = "frontend"
export function say () {
    console.log("full-stack");
}