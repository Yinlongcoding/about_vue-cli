# A summary of the use of webpack

##### 题记：
   最近几天在对自己写的词典项目进行**webpack**打包处理，该篇用以记录过程和踩过的坑。  
   词典项目基于**Vue-cli** ,所以也会是一个关于 vue_2.0和 webpack打包整个过程记录。

#### 目录：
 - 准备工作
 - 构建环境
 - 热身组件
 - ui依赖
   + element.ui
 - 依赖插件
   + vue-router
   + axios   
   + vuex
 - 模块拆分
   + 头部编写
   + 主题编写
   + 其他模块
 - CSS
   + 整体布局
   

##### 准备工作：
npm 安装响应的依赖库：
    Node.js & npm ？ continue ：[download Node.js](https://nodejs.org/en/)
```node
    npm install webpack vue-cli -g  // 全局安装方便使用
```


##### 构建 Vue-cli 项目环境

在这之前需要创建一个文件夹用以存放你项目： //  本例：Floder: node
```node
    vue init webpack [name]
? Generate project in current directory? Yes
  This will install Vue 2.x version of the template.
  For Vue 1.x use: vue init webpack#1.0 

? Project name dictionary               // 项目名称
? Project description A Vue.js project  // 项目介绍
? Author Sliver <wnhoper@gmail.com>     // 作者
? Vue build standalone                  // 构建独立
? Install vue-router? No                // 路由,这里我选择关闭路由
? Use ESLint to lint your code? Yes     
? Pick an ESLint preset Standard         
? Setup unit tests with Karma + Mocha? No  // 一下两项为测试使用依赖 
? Setup e2e tests with Nightwatch? No

   vue-cli · Generated "node".            // 这个是我根文件夹 app是其子集

   To get started:                        
   
     npm install
     npm run dev
   
   Documentation can be found at https://vuejs-templates.github.io/webpack

    npm install   // 时间可能会久一点，耐心等待
    npm run dev   
    // 稍等片刻，vue 会创建一个server port:8080, 浏览器会主动打开, vue的热加载
    即在代码中的每次更改都会同步到ui当中，如果出现错误，在终端内也会提示错误信息
```
![img](/images/cli.png) ![img](/images/floder.png)  
** 在目录中需要注意一下几点 **
* App.vue 为所有组件`注册`和`使用`的入口文件
* main.js 为所书写的js的的入口文件
* 所有的组件必须先注册，才能使用，否则在终端中会报错（提示信息完善）

##### 热身组件
先写一个打招呼的组件热热身吧，熟悉一下玩法
在 `src` 目录下的`components`下创建一个`test.vue`开启第一次尝试吧
```
// test.vue
  <template>
    <div class="test">
        <h2> this is one test! </h2>
        <input type="text" v-model="msg">
        <span>{{msg}}</span>
    </div>
  </template> 

  <script>  // 这里为组件添加必要data
  exprot default {
    data () {   // 此处为坑点:data是一个函数,书写方式严格,fnName与括号见的空格不可省略
      return {  // 这里注意，在vue组件中,所有用到的信息都是data函数的返回值
         msg: 'hello honey!'
      }
    } 
  }
  </script>
  
  <style>  // 这里为组件写样式
    .test {
      font-family: 'yahei';
      color: #eac;
    }
  </style>
```
接下来，我们需要到App.vue来改写点东西
```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <test></test>  // 使用组件
  </div>
</template>

<script>
import Hello from './components/Hello' 
import test from './components/test.vue'  
// 注册组件，注意避免使用[保留词]来注册组件，例如：head foot nav ...否则会报错

export default {
  name: 'app',
  components: {
    Hello,
    test    // 添加组件
  }
}
</script>

<style>
...
</style>

```
然后看看你页面有没有发生变化呢？ 同时，细心的我们发现在终端中会一直提示你在干嘛
![time](/images/time.png) ![example](/images/example_1.png)  
哈哈，恶趣味一下！继续！我的目的是对我的字典进行模块化的改写。其中需要依赖vue的多个插件帮助，所以一个个来熟悉吧！

##### 依赖插件
* [vue-router](https://router.vuejs.org/zh-cn) & [axios](https://www.npmjs.com/package/axios)
  - 所谓的前后端分离的表现形式是什么？渐渐了解后发现核心就是路由
  - 理一下思路：
    + App.vue 为父组件我们所写的路有必然是存在其内部
    + vue-router
      - 创建好路由的路径, 引导路由组件正确渲染
      - 目前有 home 和 about 两个组件
      - ```<router-link to="/path">value</router-link> 和1.x有所区别```
      - 在Home组件中，使用axios的来请求JSON数据
      - ```<router-view></router-view> 路由出口，路由到的组件会渲染到这里！```
      - 思路理顺了！开始
``` 
// App.vue
  <template>
  <div id="app">
    <h1>hello vue!</h1>
    <div class="nav">
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li><router-link to="/about">Abuout</router-link></li>  
      </ul>
    </div>
    <div class="main">
      <router-view></router-view>     
    </div>
  </div>
</template>
<script> 
import home from './components/Home.vue'
import about from './components/About.vue'

export default {
  name: 'app',
  components: {
    home,
    about
  }  
}
</script>
<style> </style>
```

```npm i vue-router --save-dev  //下载

// main.js
    import VueRouter from 'vue-router' 
    impott axios from 'axios'  // ajax 请求依赖
    Vue.use(VueRouter)
    Vue.prototype.$http = axios   
    // axios 并不能使用vue.use()所以在vue的原型链上添加这个方法，这样每个组件都可以无障碍使用，可能会造成一些‘污染’，但显然利大于弊。

    const router = new VueRouter({  // 创建一个vue-router 的实例 
      routes: [                     // 2.x版本的vue-router的routes变更为数组对象  
        {path: '/home', component: Home},  
        {path: '/about', component: About},
        {path: '*', redirect: '/home'}  // router 重定向， 
      ]                    
    })

    new Vue({
      el: '#app',
      router,
      render: h=> h(App)   // vue 钩子 render函数，也是一个挂载实例的方法
    })
```
那么接下来就是写Home.vue & About.vue
```
 // Home.vue
<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="word in words">
        {{ word.headword }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      msg: '单词列表',
      words: '',
    }
  },
  created: function () {
    var self = this   
    // 在axios中this的指向axios的promess对象，所以需要一个指向vue实例的指针
    this.$http.get('http://damiao.io:5000/word/head')   
        .then(function(res){
          self.words = res.data 
        })
        .catch(error=>console.log(error))
  }
}
</script>
<style></style>
```
```
About.vue
<template>
  <div class="about">
    <ul>
      <li v-for="list in lists"> {{ list.name }}</li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'about',
  data () {
    return {
      msg: 'About',
      lists: [
        {name: '发音' },
        {name: '音标' },
        {name: '释义' },
        {name: '例句' } 
      ]
    }
  }
}
</script>
```
父组件向子组件传值利用```props```,反过来则需要用到 $on,$emit 之类的监听与执行

##### 模块拆分
- 字典头部标题，搜索框，搜索按钮，清楚搜索框按钮
- 字典主题内容
  + 单词释义及发音
  + 单词例句
- 主题切换







##### 头部编写  
在`components`下创建一个文件夹叫`header`里面创建一个组件`head.vue`
头部内容： 一个标题，一个输入框，两个按钮，一个清楚输入内容，一个搜索按钮
```
  // head.vue 
  <template>
    <div class="header">
      <h1>{{ title }}</h1>
      <div class="header-content" v-model=" word ">
        <input type="text">
        <button>x</button>
        <button>search</button>
      </div>
    </div>  
  </template>
  <script>
  export default {
    data () {
      return {
        title: 'Dictionary',
        word: ''
      }
    }
  }
  </script>
  <style>
    ...
  </style>
```
这时候也要在`App.vue`内部进行注册和使用。