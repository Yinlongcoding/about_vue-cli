## Vue-cli的小总结
#### 题记：
   最近几天在对自己写的词典项目进行**webpack**打包处理，该篇用以记录过程和踩过的坑。  
   词典项目基于**Vue-cli** ,所以也会是一个关于 vue_2.0和 webpack打包整个过程记录。

##### 技术栈  
`Vue.js, Vue-router, Vuex, Axios, Element.ui`  
改写项目：[Dictionary_2.0](http://sliver.site/dictionary.github.io/dictionary.html)

![img](./images/dic3.gif)

#### 目录：
 - Hello Vue
 - 准备工作  
 - [构建环境](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/created_vue-cli.mdown)
 - [热身组件](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/learning_components.mdown)
 - [UI 依赖](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/about_ElementUi.mdown)
 - 依赖插件
     + [vue-router](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/vue-router.mdown)
     + [axios](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/axios.mdown)
     + [vuex](https://github.com/Yinlongcoding/about_webpack.github.io/blob/master/recording/vuex.mdown) 

项目地址：https://github.com/Yinlongcoding/dictionary3.github.io

#### Hello Vue
* [VueJs](https://cn.vuejs.org/) 渐进式，JavaScript 框架
* Vue 与 jQueryJs
    - vue
        + 操作DOM元素对象
        + 以数据为驱动，简化DOM操作，提高DOM复用率
        + 利于后期维护
    - jQuery
        + 语义化明显
        + 易于理解
        + 可扩展插件众多
    - 选择
        + DOM操作频繁，无需复杂动画效果 - Vue (为什么不自己写呢？)
        + DOM操作不频繁，需要复杂动画效果 - jQuery
* Vue 与 [AngularJS](https://angularjs.org/) & [ReactJs](https://facebook.github.io/react/)
    - 优势：
        + 易用： Vue 与其他两者很像，有些语法也相同
        + 轻灵： 相对于其他两者而言，Vue吸取了两者的缺陷，api更简洁，代码更简洁
        + 学习： 相比较其他两者陡峭的学习曲线，vue的学习曲线很平缓
        + 文档： 官方中文文档，你值得拥有（但这不是你不学英语的理由）
        + 插件： vue拥有不输于其他两者的插件资源
    - 劣势： 
        + 语法： 需熟悉ES6语法
        + 高阶： vue 不缺入门教程，但是高阶教程和文档欠缺
        + 风格： 实现一个需求，vue可以有多种写法，但是在团队协作时，就显得有些难受了
        + 兼容： 不支持IE8及以下版本
        + 调试： 在components 内debugger委实难受
        + 其他： 待补充

#### 准备工作：

npm 安装相应的依赖库：
    Node.js & npm ？ continue ：[download Node.js](https://nodejs.org/en/)
```node
    npm install webpack vue-cli -g  // 全局安装方便使用
```
* [npm](https://www.npmjs.com/) 是什么？
    - npm，是JavaScript的包管理器和世界上最大的软件注册表。提供可复用代码的软件包，并以强大的新方式组合它们
* [cnpm](http://npm.taobao.org/) 是什么？
    - cnpm 是一个完整`npmjs`镜像，用此代替官方版本(只读)
* 两者有何区别？
    - 同：为项目所依赖的模块提供的一个统一的管理方案
    - 异：
        + npm 下载依赖模块时，速度偏慢(可翻墙提升下载速度)，对模块的依赖加载很完善
        + cnmp 看起来和npm 一样，下载速度很快，但是在下载模块时可能存在模块依赖加载不完善的问题，在开发中存在致命的隐患
        + 推荐使用官方化的 npm 下载依赖，避免项目出现不必要的问题
