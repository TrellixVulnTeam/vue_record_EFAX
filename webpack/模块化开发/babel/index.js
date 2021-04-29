console.log("ok");
// 默认导入 - import zairesinatra from './zs.js'
// 按需导入 - {}
import zairesinatra, {usr, role, say} from './zs.js'
console.log(zairesinatra);
console.log(usr + '---' + role + '---' + say);
// 输入 npx babel-node ./index.js 执行
// 如果存在 SyntaxError: Cannot use import statement outside a module 则可能是 babel 相关未完整依赖

// ES6模块化基本语法
// 仅执行模块代码、不需得到模块向外暴露成员
import './ES6模块化基本语法.js' // 执行了 0 1 2 3
