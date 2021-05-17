# VUEX

------

基本使用步骤（配置）、核心概念、实现业务功能

## 初识：

### 组件之间共享数据的方式（<u>小范围</u>）：

- 父向子组件传递数据：`v-bind` 属性绑定
- 子组件向父组件传值： `v-on` 事件绑定
- 兄弟组件之间数据共享： `EventBus` => `$on` 注册事件-接受数据的组件、`$emit` 发送数据的组件

### Vuex：

- 实现组件全局状态（数据）管理的一种机制（方案），可以实现组件之间的数据共享。（Vuex中的数据也称为 **状态**、全局数组 ）

<img src="./assets/vuex.png" width="40%" />

- 大范围、频繁的数据共享 => VUEX 
- 集中管理共享数据，易于开发与后期维护；高效数据共享，提高开发效率；存储在 vuex 中的数据是**响应式**的，实时保持**数据与页面的同步**
- 对于组件间共享的数据存储在 vuex 中；在组件中的私有数据，依旧存储在组件自身的 `data` 中即可

### 核心：

- `State`：提供唯一公共数据源，所有共享数据同一放在 `Store` 的 `State` 中储存

```js
const store = new Vuex.Store({
	state: { count:0 } // 对象中的数据就是全局共享的数据
})
```

组件中访问 `State` 中数据的<u>第一种方式</u>：

```js
this.$store.state.全局数据名称
```

组件中访问 `State` 中数据的<u>第二种方式</u>：

```js
// 从 vuex 中按需导入 mapState 函数
import { mapState } from 'vuex'
```

```js
// 将全局数据映射为当前组件的计算属性
computed: {
  ...mapState(['count']); // 需要哪些全局属性就在这里声明
}
```

- `mutation`：用于变更 `Store` 中的数据（不推荐`this.$store.state.count`修改全局数据-项目大找不到谁修改的数据）

操作 `mutation` 变更数据虽较为繁琐却可以集中监控所有的数据变化

方式一

```js
const store = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		add(state, strp) {
			// 变更状态
			state.count += step
		}
	}
})
```

```js
// 触发 mutation
methods: {
  handle1() {
    // 触发 mutations 的第一种方式
    this.$store.commit('add')
  }
}
```

方式二

```js
// 从 vuex 中按需导入 mapMutations 函数
import { mapMutations } from 'vuex'
```

```js
// 在组件中通过导入的 mutations 函数映射为当前组件的 methods 函数
methods: {
  ...mapMutations(['add','addN'])
}
```

`Action`：`Mutation` 中不能写异步的代码，而 `Action` 专门处理异步任务。在 `Action` 中间接地触发 `Mutation` 方式间接变更数据。
方式一

```js
const store = new Vuex Store({
	mutations: {
		add(state) {
			state.count++
		},
    addN(state, step) {
      state.count += step
    }
	},
	actions: {
		addAsync(context, step) {
		setTimeout(() => {
			context.commit('addN', step)
		}, 1000)
		}
	}
})
```

```js
// 触发 Actions 
methods: {
	handle() {
		this.$store.dispatch('addAsync', 5) // 一个是dispatch一个是commit
	}
}
```

**第二种方式**

```js
// 从 vuex 中按需导入 mapActions 函数
import { mapActions } from 'vuex'
```

```js
// 指定的 actions 函数映射为当前组件的 methods 函数
methods: {
	...mapActions(['addAsync', 'addNAsync'])
}
```

<u>因为是映射，导入后可以直接绑定到事件</u>

- `Getter` 用于对 `Store` 中数据进行加工处理形成新的数据，不会修改 `Store` 里的原数据，仅包装。类似于 `Vue` 中计算属性。 `Store` 中数据发生变化，`Getter` 数据也会发生变化。

```
const store = new Vuex.Store({
	state: {
		count: 0
	},
	getters: {
		showNum: state => {
			return '当前最新的数据是['+ state.count +']'
		}
	}
})
```

```js
// 使用 getters 第一种方式
this.$store.getters.名称
// 使用 getters 的第二种方式
import { mapGetters } from 'vuex'
computed: {
  ...mapGetters(['名称'])
}
```

