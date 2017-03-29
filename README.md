# A summary of the use of webpack

##### 题记：
   最近几天在对自己写的词典项目进行**webpack**打包处理，该篇用以记录过程和踩过的坑。  
   词典项目基于**Vue-cli** ,所以也会是一个关于 vue_2.0和 webpack打包整个过程记录。

##### 准备工作：
npm 安装响应的依赖库：
    Node.js & npm ？ continue ：[download Node.js](https://nodejs.org/en/)
```node
    npm install webpack vue-cli -g  // 全局安装方便使用
```

###### 构建 Vue-cli 项目环境

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

##### 开工
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
import test from './components/test.vue'  // 注册组件

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
哈哈，恶趣味一下！  
继续！我的目的是对我的字典进行模块化的改写。


