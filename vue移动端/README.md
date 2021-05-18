# 项目初始化

> - 使用 Vue CLI 创建项目
> -  Vant 组件库的导入方式
> - 制作使用字体图标的方式
> - 在 Vue 项目中处理 REM 适配
> - axios 请求模块的封装

## 使用 Vue CLI 创建项目

```zsh
# 前置
npm install --global @vue/cli
```

在命令行中输入以下命令创建 Vue 项目：

```zsh
vue create zs-mobile
```

```zsh
Vue CLI v4.5.13
? Please pick a preset:
# 默认勾选 babel、eslint
  default (babel, eslint)
# 自定义勾选特性配置
> Manually select features
```


```shell
? Please pick a preset: Manually select features
? Check the features needed for your project:
 (√) vue version
 (√) Babel
 ( ) TypeScript
 ( ) Progressive Web App (PWA) Support
 (√) Router
 (√) Vuex
 (√) CSS Pre-processors # css预处理器-sass\less
>(√) Linter / Formatter # 代码格式化与校验
 ( ) Unit Testing
 ( ) E2E Testing
```

```zsh
Vue CLI v4.5.11
┌───────────────────────────────────────────┐
│                                           │
│   New version available 4.5.11 → 4.5.13   │
│     Run npm i -g @vue/cli to update!      │
│                                           │
└───────────────────────────────────────────┘

? Please pick a preset: Manually select features
# Babel：es6 转 es5、Vuex：数据容器，存储共享数据、CSS Pre-processors：CSS 预处理器、Linter / Formatter：代码格式校验
? Check the features needed for your project: Choose Vue version, Babel, Router,
 Vuex, CSS Pre-processors, Linter
? Choose a version of Vue.js that you want to start the project with 2.x
# history 路由 URL 简洁，兼容性不好
? Use history mode for router? (Requires proper server setup for index fallback 
in production) No
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported 
by default): Less
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save
# Babel、ESLint 等工具会有一些额外的配置文件分别保存到单独的配置文件-方便自定义
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated confi
g files
? Save this as a preset for future projects? (y/N) n
```


```shell
🎉  Successfully created project zs-mobile.
👉  Get started with the following commands:

 $ cd zs-mobile
 $ npm run serve
```


```shell
 # 安装结束，命令提示你项目创建成功，按照命令行的提示在终端中分别输入
 DONE  Compiled successfully in 2374ms                               上午5:11:57


  App running at:
  - Local:   http://localhost:8080/ 
  - Network: http://192.168.124.2:8080/

  Note that the development build is not optimized.
  To create a production build, run npm run build.
```

## 加入 Git 版本管理

几个好处：代码备份、多人协作、历史记录...

远程仓库：[GitHub](https://github.com/lipengzhou)、[码云](https://gitee.com/)、[Coding](https://coding.net/)、...

### 将本地仓库推到线上

- 没有本地仓库操作如下

```shell
# 创建本地仓库
git init

# 将文件添加到暂存区
git add 文件

# 提交历史记录
git commit "init"

# 添加远端仓库地址
git remote add origin 远程仓库地址

# 验证添加成功
git remote -v

# 推送提交 => origin = 远程仓库的简写 、 master = master:master
git push -u origin master
# 简写并记住配置
git push --set-upstream origin master
```

- 已有本地仓库（Vue CLI 已经初始化好）


```shell
# 添加远端仓库地址
git remote add origin 你的远程仓库地址

# 推送提交
git push -u origin master
```

## 调整初始目录结构

默认生成的目录结构不满足我们的开发需求，所以这里需要做一些自定义改动。

主要工作：

- 删除初始化的默认文件
- 新增调整需要的目录结构

1、将 `App.vue` 修改为

```html
<template>
  <div id="app">
    <!-- 路由出口 -->
    <router-view/>
    <h1>zairesinatra</h1>
    <div>
      <i class='font_family icon-gengduo'></i>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
```

2、将 `router/index.js` 修改为

```javascript
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Vue
  }
]

const router = new VueRouter({
  routes
})

export default router

```

3、删除

- src/views/About.vue
- src/views/Home.vue
- src/components/HelloWorld.vue
- src/assets/logo.png

4、创建以下几个目录

- src/api 目录
  - 存储接口封装
- src/utils 目录
  - 存储一些工具模块
- src/styles 目录
  - index.less 文件，存储全局样式
  - 在 `main.js` 中加载全局样式 `import './styles/index.less'`

调整之后的目录结构如下。

```js
.                                 
├── README.md                     
├── babel.config.js               
├── package-lock.json             
├── package.json                  
├── public                        
│   ├── favicon.ico               
│   └── index.html                
└── src                           
    ├── api
    ├── App.vue                   
    ├── assets                    
    ├── components                
    ├── main.js                   
    ├── router
    ├── utils
    ├── styles
    ├── store                     
    └── views
```

## 导入图标素材

设计稿中的图标为方便使用，制作为字体图标。

制作字体图标的工具使用：https://www.iconfont.cn/。

注册账户、创建项目、上传图标到项目、生成链接、配置到项目中使用

一种方式是[将 SVG 图标 包装为 Vue 组件来使用](https://cn.vuejs.org/v2/cookbook/editable-svg-icons.html)。

一种方式是将 SVG 制作为字体图标来使用：

## 引入 Vant 组件库

Vant 是有赞商城前端开发团队开发的一个基于 Vue.js 的移动端组件库

- [官方文档](https://youzan.github.io/vant/#/zh-CN/)
- [GitHub 仓库](https://github.com/youzan/vant)

Vant 引入项目的四种方式：

- 方式一：自动<u>按需引入</u>组件
  - 和方式二一样，都是按需引入，但是加载更方便一些（需要额外配置插件）
  - 优点：打包体积小
  - 缺点：每个组件在使用之前都需要手动加载注册

- 方式二：手动按需引入组件
  - 在不使用插件的情况下，可以手动引入需要的组件
  - 优点：打包体积小
  - 缺点：每个组件在使用之前都需要手动加载注册

- 方式三：<u>导入所有</u>组件
  - Vant 支持一次性导入所有组件，引入所有组件会增加代码包体积，因此不推荐这种做法
  - 优点：导入一次，使用所有
  - 缺点：打包体积大

- 方式四：通过 CDN 引入
  - 使用 Vant 最简单的方法是直接在 html 文件中引入 CDN 链接，之后你可以通过全局变量`vant`访问到所有组件。
  - 优点：适合一些演示、示例项目，一个 html 文件就可以跑起来
  - 缺点：不适合在模块化系统中使用

这里建议为了前期开发的便利性我们选择方式三：导入所有组件，在最后做打包优化的时候根据需求配置按需加载以降低打包体积大小。

1、安装 Vant

```shell
npm i vant
```

2、在 `main.js` 中加载注册 Vant 组件

```javascript
import Vue from 'vue'
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)
```

3、查阅文档使用组件

## 移动端 REM 适配

Vant 中的样式默认使用 `px` 作为单位，如果需要使用 `rem` 单位，推荐使用以下两个工具：

- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 是一款 postcss 插件，用于将单位转化为 rem
- [lib-flexible](https://github.com/amfe/lib-flexible) 用于设置 rem 基准值

下面我们分别将这两个工具配置到项目中完成 REM 适配。

**一、使用 [lib-flexible](https://github.com/amfe/lib-flexible) 动态设置 REM 基准值（html 标签的字体大小）**

1、安装

```shell
# yarn add amfe-flexible
npm i amfe-flexible
```

2、然后在 `main.js` 中加载执行该模块

```javascript
import 'amfe-flexible'
```

最后测试：在浏览器中切换不同的手机设备尺寸，观察 html 标签 `font-size` 的变化。（例如在 iPhone 6/7/8 设备下，html 标签字体大小为 37.5 px）

**二、使用 [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 将 `px` 转为 `rem`**

1、安装

```shell
# yarn add -D postcss-pxtorem
# -D 是 --save-dev 的简写
npm install postcss-pxtorem -D
```

2、然后在**项目根目录**中创建 `.postcssrc.js` 文件

```javascript
module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    }
  }
}

```

3、**配置完毕，重新启动服务**

最后测试：**刷新浏览器页面**，审查元素的样式查看是否已将 `px` 转换为 `rem`。

**需要注意的是：**

- 该插件**不能转换行内样式中的 `px`**，例如 `<div style="width: 200px;"></div>`

## 关于 `.postcssrc.js` 配置文件

```js
// 基于 node.js 编写,都是 node.js 代码
module.exports = {
  // 配置要使用的插件
  plugins: {
    // 配置使用 autoprefixer 插件 => 生成浏览器 CSS 样式规则前缀
    // 因为 VueCLI 内部已经配置了 autoprefixer 插件,这里再次配置可能出现警告⚠️,出现则可以注释掉
    'autoprefixer': {
      // 配置要兼容的环境信息
      browsers: ['Android >= 4.0', 'iOS >= 8']
    },
    // 使用 postcss-pxtorem 插件
    // 把 px 转为 rem
    'postcss-pxtorem': {
      // lib-flexible 的 REM 适配方案:一行分为10份，每份十分之一
      // 所以 rootValue 应该为设计稿宽度的十分之一
      // 设计稿为 iphone6 则是750，十分之一份为75；vant 是基于 375 写的，故需要减小一倍
      // 通过 Github 指导文档 options 选项可以进行函数转换
      // rootValue ({ file }) {
      //	return file.indexOf('vant') !== -1 ? 37.5 : 75
      // }
      rootValue: 37.5,
      // 配置要转换的 css 属性
      // * 表示所有
      propList: ['*']
      // propList: ['height'] 表示仅转换 height
    }
  }
}

```

`.postcssrc.js` 是 PostCSS 的配置文件。

（1）PostCSS 介绍（开发人员可以根据项目的需要，开发出自己的 PostCSS 插件）

[PostCSS](https://postcss.org/) 是一个处理 CSS 的处理工具，一般不单独使用，常与已有的构建工具进行集成，本身功能主要负责**解析 CSS 代码**，**再交由插件来进行处理**。其插件功能决定其他具体操作，例如：

- [Autoprefixer](https://github.com/postcss/autoprefixer) 插件可以实现自动添加浏览器相关的声明前缀
- [PostCSS Preset Env](https://github.com/csstools/postcss-preset-env) 插件可以让开发人员使用更新的 CSS 语法特性并实现向下兼容
- [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) 可以实现将 px 转换为 rem
- ...

[Vue CLI 默认集成了 PostCSS](https://cli.vuejs.org/zh/guide/css.html#postcss)，并且默认开启了 [autoprefixer](https://github.com/postcss/autoprefixer) 插件。

> Vue CLI 内部使用了 PostCSS。
>
> 可以通过 `.postcssrc` 或任何 [postcss-load-config](https://github.com/michael-ciniawsky/postcss-load-config) 支持的配置源来配置 PostCSS。也可以通过 `vue.config.js` 中的 `css.loaderOptions.postcss` 配置 [postcss-loader](https://github.com/postcss/postcss-loader)。
>
> 默认开启了 [autoprefixer](https://github.com/postcss/autoprefixer)。如果要配置目标浏览器，可使用 `package.json` 的 [browserslist](https://cli.vuejs.org/zh/guide/browser-compatibility.html#browserslist) 字段。

[autoprefixer](https://github.com/postcss/autoprefixer) 是一个自动添加浏览器前缀的 PostCss 插件，`browsers` 用来配置兼容的浏览器版本信息，但是写在这里的话会引起编译器警告。

```
Replace Autoprefixer browsers option to Browserslist config.
Use browserslist key in package.json or .browserslistrc file.

Using browsers option can cause errors. Browserslist config
can be used for Babel, Autoprefixer, postcss-normalize and other tools.

If you really need to use option, rename it to overrideBrowserslist.

Learn more at:
https://github.com/browserslist/browserslist#readme
https://twitter.com/browserslist
```

警告意思应该将 `browsers` 选项写到 `package.json` 或 `.browserlistrc` 文件中。

```
[Android]
>= 4.0

[iOS]
>= 8

```

> 具体语法请[参考这里](https://github.com/browserslist/browserslist)。

（3）postcss-pxtorem 插件的配置

![image-20200319105610557](/Users/xieziyi/Desktop/前端vue移动端项目资料/vue移动端项目第一天/讲义/讲义/assets/image-20200319105610557.png)

- `rootValue`：表示根元素字体大小，它会根据根元素大小进行单位转换
- `propList` 用来设定可以从 px 转为 rem 的属性
  - 例如 `*` 就是所有属性都要转换，`width` 就是仅转换 `width` 属性



`rootValue` 应该如何设置呢？

```
如果你使用的是基于 lib-flexable 的 REM 适配方案，则应该设置为你的设计稿的十分之一。
例如设计稿是 750 宽，则应该设置为 75。
```



大多数设计稿的原型都是以 iphone6 为原型，iphone6 设备的宽是 750，我们的设计稿也是这样。

但是 Vant 建议设置为 37.5，为什么呢？

```
因为 Vant 是基于 375 写的，所以如果你设置为 75 的话，Vant 的样式就小了一半。
```

所以如果设置为 `37.5` 的话，Vant 的样式是没有问题的，但是我们在测量设计稿的时候都必须除2才能使用，否则就会变得很大。



这样做其实也没有问题，但是有没有更好的办法呢？我就想实现测量多少写多少（不用换算）。于是聪明的你就想，可以不可以这样来做？

- 如果是 Vant 的样式，就把 `rootValue` 设置为 37.5 来转换
- 如果是我们的样式，就按照 75 的 `rootValue` 来转换



通过[查阅文档](https://github.com/cuth/postcss-pxtorem#options)我们可以看到 `rootValue` 支持两种参数类型：

- 数字：固定值
- 函数：动态计算返回
  - postcss-pxtorem 处理每个 CSS 文件的时候都会来调用这个函数
  - 它会把被处理的 CSS 文件相关的信息通过参数传递给该函数

所以我们修改配置如下：

```js
/**
 * PostCSS 配置文件
 */

module.exports = {
  // 配置要使用的 PostCSS 插件
  plugins: {
    // 配置使用 autoprefixer 插件
    // 作用：生成浏览器 CSS 样式规则前缀
    // VueCLI 内部已经配置了 autoprefixer 插件
    // 所以又配置了一次，所以产生冲突了
    // 'autoprefixer': { // autoprefixer 插件的配置
    //   // 配置要兼容到的环境信息
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },

    // 配置使用 postcss-pxtorem 插件
    // 作用：把 px 转为 rem
    'postcss-pxtorem': {
      rootValue ({ file }) {
        return file.indexOf('vant') !== -1 ? 37.5 : 75
      },
      propList: ['*']
    }
  }
}

```

配置完毕，把服务重启一下，最后测试，very good。



## 封装请求模块

使用 [axios](https://github.com/axios/axios) 作为项目中的请求库，为方便使用则将其封装为请求模块，按需加载即可。

1、安装 axios

```shell
npm i axios
```

2、创建 `src/utils/request.js`

```javascript
/**
 * 封装 axios 请求模块
 */
import axios from "axios"

const request = axios.create({
  baseURL: "http://ttapi.research.itcast.cn/" // 基础路径
})

export default request
```

3、使用方式

- 方式一（简单方便，但是不利于接口维护）：我们可以把请求对象挂载到 `Vue.prototype` 原型对象中，然后在组件中通过 `this.xxx` 直接访问
- 方式二（推荐）：我们把每一个请求都封装成每个独立的功能函数，在需要的时候加载调用，这种做法更便于接口的管理和维护

在我们的项目中建议使用方式二，更推荐（在随后的业务功能中我们就能学到）。



